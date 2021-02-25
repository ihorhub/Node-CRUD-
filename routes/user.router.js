const { Router } = require('express');
// const { userController } = require('../controllers');
const {userMiddlewares} = require('../middlewares');
const {userController} = require('../controllers')
const userRouter = Router();

userRouter.post('/', userMiddlewares.checkUserValydyty, userController.createUser);
userRouter.get('/', userController.getUsers);
userRouter.get('/:params',userController.getUserByParams);
userRouter.put('/:userId', userController.updateUser);
userRouter.delete('/:userId', userController.deleteUser);

module.exports = userRouter;
np
