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
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};
const update = async (
  id: string,
  data: Partial<IUser>
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: id }, data, { new: true });
  return result;
};

export const UserService = {
  createUser,
  getAllUser,
  getSingleUser,
  update,
};
