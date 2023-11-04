# 🛰️ 번외 - 보완점

- Nara Space의 입사 지원 과제로 제출된 프로젝트의 코드 개선 내용을 담고 있습니다.
- 제출된 과제로 끝내기 아쉬워 추가로 문제점을 진단하고 개선 방안을 적용하여 코드를 재설계하였습니다.
- 이 내용은 체점에 영향을 주지 않도록 별도의 브랜치에서 관리합니다.

</br>

# 1. 잘못된 반응형 설계

## 1-1. 기존 반응형 웹 설계 (❌)

- css media 작성에 mobile, tablet, desktop 이라는 변수를 활용하고 싶었습니다.
- styled-component에게 props를 전달함을 이용할 수 있다고 판단
- 웹 전체에서 디바이스 사이즈 상태를 컴포넌트에게 전달하면 활용할 수 있겠다고 판단이 되었습니다.
- 그래서 전역 상태로 현재 디바이스 상태를 관리하고 디아비스 사이즈가 변하면 상태가 변경되도록 Redux에서 관리했습니다.

```tsx
export const CalendarBox = styled.div<{ $isMobile: boolean }>`
  width: ${(props) => (props.$isMobile ? '290px' : '330px')};
}
`;
```

- 디아비스 상태에 따라 반응형으로 css가 잘 작동 되기에 문제가 없다고 생각하고 적용했습니다.

## 1-2. 문제점 (😱)

- 디바이스 크기가 변경되면 `상태`도 변경되기에 그 상태에 의존하는 모든 컴포넌트의 리렌더링이 일어납니다.
- 프로젝트 규모가 커진다면 디바이스 크기가 변경될 때마다 일어나는 렌더링은 성능과 사용자 경험에 부정적인 영향을 줍니다.

## 1-3. 해결 방안 (👌)

- css의 @media 쿼리는 렌더링 문제 없이 반응형 디자인을 구현하는 표준 방법입니다.
- styled-components의 theme를 사용하여 mobile, tablet, desktop 변수 활용이 가능함이 떠올랐습니다.
- 상태 대신 변수를 사용하여 디바이스 사이즈에 따른 스타일을 적용했습니다.
- 불필요한 리렌더링 없이 기존과 동일한 반응형 동작을 수행하는 웹으로 개선되었습니다.

```ts
// styles/theme
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  media: {
    mobile: '@media (max-width: 767px)',
    tablet: '@media (min-width: 768px) and (max-width: 1023px)',
    desktop: '@media (min-width: 1024px)',
  },
};
```

```ts
// styles-component
export const Container = styled.div`
  width: 935px;
  height: 630px;

  ${(props) => props.theme.media.mobile} {
    width: 350px;
    height: 500px;
  }

  ${(props) => props.theme.media.tablet} {
    width: 688px;
    height: 500px;
  }
`;
```

</br>

# 2. Redux의 미들웨어 추가하기

## 2-1. 기존 Redux 로직

- 전역 상태관리로 Redux 라이브러리를 사용하고 있습니다.
- 하지만 사용중인 Redux의 로직은 Context API와 useReducer 훅을 사용한 방식과의 큰 차이점이 없습니다.
- Redux는 Context API에는 존재하지 않는 미들웨어(Middleware)가 존재합니다.

## 2-2. 미들웨어란?

- Redux의 미들웨어를 사용하면 액션 객체가 리듀서에서 처리되기 전에 다른 작업을 수행할 수 있습니다.

> 즉, action -> middleware -> dispatch -> reducer 과정으로 액션이 디스페치되면 리듀서에서 해당 액션을 실행하기 전에 추가적인 작업을 수행합니다.

## 2-3. 미들웨어에서 사용하는 다양한 작업들

- 특정 조건에 따라 액션이 무시되게 만듭니다.
- 액션이 디스패치 됐을 때 이를 수정해서 리듀서에 전달되도록 합니다.
- 특정 액션이 발생했을 때 특정 함수를 실행되도록 합니다.

> 이러한 특징은 특히 **비동기 작업 처리**에서 많이 사용됩니다.

## 2-4. 미들웨어 만들어보기

```ts
// myLogger.ts
import { Action, AnyAction, Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { IRootState } from '@/modules/types';

const myLogger: Middleware<
  Record<string, never>,
  IRootState,
  Dispatch<AnyAction>
> =
  (store: MiddlewareAPI<Dispatch<AnyAction>, IRootState>) =>
  (next: Dispatch<AnyAction>) =>
  (action: Action<string>) => {
    console.log(action); // 현재 디스패치되는 액션 출력
    const result = next(action); // 다음 미들웨어 (없다면 리듀서)에게 액션 전달
    console.log(store.getState()); // 리듀서에서 처리된 상태 출력
    return result; // dispatch(action)의 결과물 반환
  };

export default myLogger;
```

```ts
// root/index.ts
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import myLogger from './middlewares/myLogger';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myLogger),
});

export type AppDispatch = typeof store.dispatch;
```

- 단순히 전달 받은 액션을 출력하고 다음으로 넘기는 미들웨어

<img src="https://velog.velcdn.com/images/sarang_daddy/post/634f87ec-5550-4c6e-aec5-7da04b8f8efa/image.png" width="50%">

> 미들웨어 안에서는 어떤 작업이든 가능합니다.  
> 미들웨어는 여러개를 만들어서 적용할 수 있습니다.

```ts
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(myLogger, anotherMiddleware),

```

## 2-5. 미들웨어 라이브러리 redux-thunk, redux-saga

- redux 비동기 작업으로는 `redux-thunk`, `redux-saga`가 많이 사용됩니다.

### 2-5-1. redux-thunk

- redux-thunk는 리덕스에서 비동기 작업을 처리 할 때 가장 많이 사용되는 미들웨어입니다.
- 이 미들웨어를 사용하면 **액션객체가 아닌 함수를 디스패치** 할 수 있습니다.

> thunk(미들웨어)를 사용하여 apis 파일에서 비동기 처리하던 로직을 redux내에서 처리되도록 수정해보았습니다.

```ts
// modules/users.ts
// 비동기 액션 (thunks) 함수
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
```

```ts
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
```

## 2-6. ⭐️ 결론

- Redux의 기본적인 액션은 동기적인 페이로드를 전달하는 객체입니다.
- 즉, 리듀서에 전달되었을 때 최종 값을 가지고 있어야합니다.
- 하지만, 데이터 요청과 같은 비동기 작업은 응답을 기다려야 합니다.
- 이를 위해 사용되는 것이 middleware 입니다.
- middleware 덕분에 액션은 Promise 결과를 기다리고 리듀서에 전달 될 수 있습니다.
- Promise의 pending, fulfilled, rejected의 상태에 따른 활용도 가능합니다.
- 기존의 비동기 함수 내부에서 dispatch를 호출하는 방법도 동일한 동작을 지원했으나
- 애플리케이션의 상태를 예측 가능하게 만들자는 Redux 철학에는 middleware를 이용하여 비즈니스 로직을 중앙집중화하는게 적합합니다.
