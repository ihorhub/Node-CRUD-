
const UserModel = require('../dataBase/users');

module.exports = {

    insertUser: (createUser) => {return new UserModel(createUser).save() },

    findUserByParams: (params) => UserModel.findOne(params),
    findUsers:()=>UserModel.find({}).limit(1).skip(4),
    updateUser: (id) => UserModel.findByIdAndUpdate(id),
    deleteUser: (id) => UserModel.findByIdAndDelete(id)
};
