const { Router } = require('express');
// const { userController } = require('../controllers');
const {userMiddlewares} = require('../middlewares');
const {deleteUser,findUserByParams,findUsers, insertUser,updateUser} = require('../services/user.service')

const userRouter = Router();

userRouter.post('/', userMiddlewares.checkUserValydyty, insertUser);
userRouter.get('/', findUsers);
userRouter.get('/:params', findUserByParams);
userRouter.put('/:userId', updateUser);
userRouter.delete('/:userId', deleteUser);

module.exports = userRouter;
