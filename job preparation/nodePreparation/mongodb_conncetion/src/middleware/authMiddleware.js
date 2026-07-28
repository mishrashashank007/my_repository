const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  try {
    console.log(('Authenicate token method is calling'));
    
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      const error = new Error('Authorization header is missing');
      error.statusCode = 401;
      return next(error);
    }

    const splitdata= authorizationHeader.split(' ');
    const [tokenType, token] = splitdata;
    console.log('tokenType',tokenType);
    console.log('token',token);
    
    if (tokenType !== 'Bearer' || !token) {
      const error = new Error(
        'Authorization header must be in Bearer token format'
      );
      error.statusCode = 401;
      return next(error);
    }

    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET,
      {
        issuer: 'user-order-api',
        audience: 'user-order-api-client'
      }
    );

    req.user = decodedToken;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      error.message = 'JWT token has expired';
      error.statusCode = 401;
    } else if (error.name === 'JsonWebTokenError') {
      error.message = 'Invalid JWT token';
      error.statusCode = 401;
    }

    next(error);
  }
};
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      const error = new Error('Authentication required');
      error.statusCode = 401;
      return next(error);
    }

    if (!allowedRoles.includes(req.user.role)) {
      const error = new Error(
        'You are not authorized to access this resource'
      );
      error.statusCode = 403;
      return next(error);
    }

    next();
  };
};

const test =(req, res, next)=>{
 console.log('test',req.user);
 next()
}
module.exports = {
  authenticateToken,
  authorizeRoles,test
};

