import { IUser, IUpdateUsers } from '@/modules/usersType';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_API_URL = 'http://localhost:9000';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => '/user_data',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Users' as const, id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),
    addUser: builder.mutation<void, IUser>({
      query: (user) => ({
        url: '/user_data',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
    updateUsers: builder.mutation<void, IUpdateUsers>({
      query: ({ ids, updateValue }) => ({
        url: `/user_data`,
        method: 'PATCH',
        body: { ids, isDeleted: updateValue },
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation, useUpdateUsersMutation } =
  userApi;
