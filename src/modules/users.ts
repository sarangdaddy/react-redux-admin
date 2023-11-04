import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export interface IUser {
  id: number;
  nickname: string;
  birthday: string;
  sex: 'm' | 'w';
  isDeleted: boolean;
}

export interface IUserDataState {
  users: IUser[];
  loading: boolean;
  error: string | null;
}

const BASE_API_URL = 'http://localhost:9000';

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    accept: 'application/json',
  },
});

export const SET_USERS = 'users/SET_USERS';
export const SET_USERS_SUCCESS = 'users/SET_USERS_SUCCESS';
export const SET_USERS_ERROR = 'users/SET_USERS_ERROR';
export const ADD_USER = 'users/ADD_USER';
export const ADD_USER_SUCCESS = 'users/ADD_USER_SUCCESS';
export const ADD_USER_ERROR = 'users/ADD_USER_ERROR';
export const UPDATE_USERS = 'users/UPDATE_USERS';
export const UPDATE_USERS_SUCCESS = 'users/UPDATE_USERS_SUCCESS';
export const UPDATE_USERS_ERROR = 'users/UPDATE_USERS_ERROR';

// 초기 상태
const initialState: IUserDataState = {
  users: [],
  loading: false,
  error: null,
};

// 비동기 액션 (thunks)
export const getUsersData = createAsyncThunk(
  SET_USERS,
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get<IUser[]>('/user_data');
      return res.data;
    } catch (err: unknown) {
      return rejectWithValue((err as AxiosError)?.response?.data);
    }
  },
);

export const addUserData = createAsyncThunk(
  ADD_USER,
  async (user: IUser, { rejectWithValue }) => {
    try {
      await axiosInstance.post<IUser>('/user_data', user);
      return user;
    } catch (err: unknown) {
      return rejectWithValue((err as AxiosError)?.response?.data);
    }
  },
);

export const updateUsersData = createAsyncThunk(
  UPDATE_USERS,
  async (
    { ids, updateValue }: { ids: number[]; updateValue: boolean },
    { rejectWithValue },
  ) => {
    try {
      const userToUpdate = { isDeleted: updateValue };
      const queryString = ids.join(',');
      await axiosInstance.patch(`/user_data?ids=${queryString}`, userToUpdate);
      return { ids, updateValue };
    } catch (err: unknown) {
      return rejectWithValue((err as AxiosError)?.response?.data);
    }
  },
);

// slice 생성 (reducer)
const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsersData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(addUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(addUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(updateUsersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUsersData.fulfilled, (state, action) => {
        state.loading = false;
        const { ids, updateValue } = action.payload;
        state.users = state.users.map((user) => {
          if (ids.includes(user.id)) {
            return { ...user, isDeleted: updateValue };
          }
          return user;
        });
      })
      .addCase(updateUsersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
