import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { OrderService } from './order.service';
import sendResponse from '../../../shared/sendResponse';
import { IOrder } from './order.interface';
import httpStatus from 'http-status';

const createOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await OrderService.createOrder(req.body);
    sendResponse<IOrder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'order created successfully!',
      data: result,
    });
  }
);

const getAllOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await OrderService.getAllOrder();
    sendResponse<IOrder[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `${result.length} order retrieved successfully`,
      data: result,
    });
  }
);

export const OrderController = {
  createOrder,
  getAllOrder,
};
