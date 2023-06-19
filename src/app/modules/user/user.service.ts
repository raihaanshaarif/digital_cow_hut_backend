import { IUser } from './user.interface';
import User from './user.model';

const createUser = async (data: IUser): Promise<IUser> => {
  const newData: IUser = { ...data, income: 0 };
  const result = await User.create(newData);
  return result;
};
const getAllUser = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

export const UserService = {
  createUser,
  getAllUser,
};
