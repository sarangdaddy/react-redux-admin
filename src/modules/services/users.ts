import { IUser, IUpdateUsers } from '@/modules/usersType';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_API_URL = 'http://localhost:9000';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => '/user_data',
    }),
    addUser: builder.mutation<IUser, IUser>({
      query: (user) => ({
        url: '/user_data',
        method: 'POST',
        body: user,
      }),
    }),
    updateUsers: builder.mutation<IUpdateUsers, IUpdateUsers>({
      query: ({ ids, updateValue }) => ({
        url: `/user_data`,
        method: 'PATCH',
        body: { ids, isDeleted: updateValue },
      }),
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation, useUpdateUsersMutation } =
  userApi;
