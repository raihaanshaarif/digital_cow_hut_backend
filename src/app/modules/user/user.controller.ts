import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';
import { IUser } from './user.interface';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.createUser(req.body);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  }
);

export const UserController = {
  createUser,
};
