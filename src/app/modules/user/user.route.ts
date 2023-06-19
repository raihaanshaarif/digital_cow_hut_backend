import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidationSchema } from './user.validate';

const userRouter = express.Router();
userRouter.post(
  '/create-user',
  validateRequest(UserValidationSchema.createUserZodValidateSchema),
  UserController.createUser
);

export const UserRouter = userRouter;