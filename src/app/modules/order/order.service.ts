import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';

import { IOrder } from './order.interface';
import { Order } from './order.model';
import { IUser } from '../user/user.interface';
import { ICow } from '../cow/cow.interface';
import { Cow } from '../cow/cow.model';
import User from '../user/user.model';

const createOrder = async (data: IOrder): Promise<IOrder> => {
  const buyer: IUser | null = await User.findById(data.buyer);
  const cow: ICow | null = await Cow.findById(data.cow);
  if (!buyer) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Buyer not found');
  }
  if (!cow) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Cow not found');
  }
  const seller = await User.findById(cow.seller);
  if (!seller) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'seller not found!');
  }
  if (cow.label === 'sold out') {
    throw new ApiError(httpStatus.BAD_REQUEST, 'cow already sold out!');
  }
  if (cow.price > buyer.budget) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'budget is not enough to buy this cow!'
    );
  }
  await User.findOneAndUpdate(
    { _id: cow.seller },
    { income: seller.income + cow.price }
  );
  await User.findOneAndUpdate(
    { _id: data.buyer },
    { budget: buyer.budget - cow.price }
  );
  await Cow.findOneAndUpdate({ _id: data.cow }, { label: 'sold out' });
  const result = await Order.create(data);
  return result;
};

const getAllOrder = async (): Promise<IOrder[]> => {
  const result = await Order.find().populate('cow').populate('buyer');
  return result;
};

export const OrderService = {
  createOrder,
  getAllOrder,
};
