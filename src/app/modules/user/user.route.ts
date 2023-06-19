import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validate';

const userRouter = express.Router();
userRouter.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);
userRouter.get('/:id', UserController.getSingleUser);
userRouter.patch(
  '/:id',
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser
);
userRouter.get('/', UserController.getAllUser);

export const UserRouter = userRouter;
