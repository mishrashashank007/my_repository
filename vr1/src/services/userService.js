const userDao = require('../dao/userDao');


  const getAllUsers= () => {
    return userDao.findAll();
  }

 const getUserById= (id)=> {
    const user = userDao.findById(id);
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    return user;
  }

 const createUser= (userData) =>{
    const { name, email } = userData;

    if (!name || !email) {
      const error = new Error('Name and email are required');
      error.statusCode = 400;
      throw error;
    }

    if (userDao.findByEmail(email)) {
      const error = new Error('Email already exists');
      error.statusCode = 409;
      throw error;
    }

    return userDao.create({ name, email });
  }

 const updateUser = (id, userData) => {
    this.getUserById(id);

    if (userData.email) {
      const existingUser = userDao.findByEmail(userData.email);
      if (existingUser && existingUser.id !== id) {
        const error = new Error('Email already exists');
        error.statusCode = 409;
        throw error;
      }
    }

    return userDao.update(id, userData);
  }

  const deleteUser = (id) => {
    this.getUserById(id);
    userDao.delete(id);
  }


module.exports = {deleteUser,updateUser,createUser,getUserById,getAllUsers}
