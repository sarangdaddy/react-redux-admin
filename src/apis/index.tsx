import axios from 'axios';
import { IUser } from '@/modules/types';
import { addUser, updateUser } from '@/modules/users';
import { AppDispatch } from '../index';

const BASE_API_URL = 'http://localhost:9000';

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    accept: 'application/json',
  },
});

export const getUsersData = async () => {
  try {
    const res = await axiosInstance.get(`/user_data`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const addUserData = async (data: IUser, dispatch: AppDispatch) => {
  try {
    const res = await axiosInstance.post(`/user_data`, data);

    if (res.status === 200) {
      dispatch(addUser(res.data));
    }
  } catch (err) {
    return err;
  }
};

export const updateUserData = async (id: number, dispatch: AppDispatch) => {
  try {
    const res = await axiosInstance.patch(`/user_data/${id}`);

    if (res.status === 200) {
      dispatch(updateUser(id));
    }
  } catch (err) {
    return err;
  }
};
