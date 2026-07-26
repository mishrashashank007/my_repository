// It is the brain (eg.chief in a restraunt). it contains business logic.
const {addUser,getAllUsers,getUserById} = require('../daos/userDao');

const createUser = (data)=>{
    const user = {
        id:Date.now(),
        name: data.name,
        age: data.age
    }
    return addUser(user);
}

module.exports = {createUser}; 