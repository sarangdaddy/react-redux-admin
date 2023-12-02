# React와 Redux를 활용한 관리자 웹 애플리케이션 구현 프로젝트

- 이 프로젝트는 `React`와 `Redux`를 학습하고 실제로 적용해보기 위한 개인 프로젝트입니다.
- 프로젝트 구축에는 `CRA`를 사용하는 대신, 맞춤형 구성을 위해 `webpack`을 기반으로 설정했습니다.
- Redux의 기본 원리부터 `Redux Toolkit`, 그리고 비동기 작업 처리와 같은 기능을 학습하고 적용했습니다.
- 서버에서 제공하는 데이터를 기반으로 UI가 변경됩니다.
- 사용자의 요청에 반응하여 서버 데이터를 업데이트하고 UI를 동적으로 변경합니다.

</br>

## 목차

- [1. 시작하기](#1-프로젝트-실행-방법)
- [2. 커밋 규칙](#2-commit-prefix-소개)
- [3. 프로젝트 구조](#3-프로젝트-구조)
- [4. 라이브러리](#4-라이브러리)
- [5. 상태관리 설명](#5-프로젝트-상태관리)
- [6. 주요 기능 설명](#6-주요-기능-설명)

</br>

## 1. 프로젝트 실행 방법

### 1-1. 저장소 복제

```bash
git clone https://github.com/sarangdaddy/react-redux-admin.git
```

### 1-2. 의존성 설치

```bash
cd react-redux-admin
npm install
```

### 1-3. JSON 서버 시작

```bash
npm run server
```

- http://localhost:9000 에서 JSON 서버의 데이터를 확인할 수 있습니다.

### 1-4. 프로젝트 시작

```bash
npm start
```

- http://localhost:3010 에서 애플리케이션을 확인할 수 있습니다.

### 1-5. TEST

```bash
npm test
```

- test code를 진행합니다.

</br>

## 2. Commit Prefix 소개

- FEAT : 기능 구현
- EDIT : 코드 수정
- CHORE : 내부 파일 수정, 빌드 파일 포함
- DEL : 사용하지 않는 코드, 파일 제거
- ADD : FEAT 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 시
- DESIGN : UI 변경
- RENAME : 폴더 및 파일명 변경
- FIX : 버그 및 오류 해결
- DOCS : 문서 관련
- MOVE : 파일 이동
- MERGE : 머지 커밋
- TEST : 태스트 코드 작성

</br>

# 프로젝트 설명

[목차로 돌아가기](#목차)

## 3. 프로젝트 구조

```
📦 REACT-REDUX-ADMIN
├─ json-server
│  └─ db.json       // 데이터베이스 파일로 user_date 정보 보관
├─ node_modules
├─ public
│  └─ fonts
│     └─ SUIT-Variable.ttf
├─ src
│  ├─ assets        // svg와 같은 정적 리소스 관리
│  ├─ components    // UI 컴포넌트 관리
│  ├─ constants     // 상수 관리 폴더
│  ├─ modules       // Redux를 통한 상태 관리 로직 폴더
│  ├─ router        // 프로젝트 라우팅 로직 관리 폴더
│  ├─ screens       // 프로젝트 페이지 컴포넌트 폴더
│  ├─ styles        // 글로벌 스타일 관리 폴더
│  ├─ utils         // 유틸리티 및 헬퍼 함수 관리 폴더
│  └─ index.tsx     // project entry point 파일
├─ package.json
└─ server.js        // json-server 설정 파일
```

</br>

## 4. 라이브러리

[목차로 돌아가기](#목차)

### 4-1. 주요 기술 스택 및 도구

- 개발 언어 : React, TypeScript
- 번들러 : webpack
- 상태 관리 : Redux
- 스타일링 : styled-components
- Mock Server : JSON-Server

### 4-2. 추가적으로 사용된 라이브러리

- reduxjs/toolkit (Redux Toolkit) : 상태관리 라이브러리 Redux 도구 모음
- react-calendar : 사용자가 날짜를 선택하는 인터페이스를 위해 사용했습니다.
- React Hook Form : Form의 요구사항 및 에러처리 코드를 효율적으로 작성하기 위해 사용했습니다.
- React Router Dom : React에서 제공하는 Router 기능을 사용했습니다.
- Jest : 테스트 진행을 위해 사용했습니다.

</br>

## 5. 프로젝트 상태관리

[목차로 돌아가기](#목차)

- 프로젝트의 상태 관리는 Redux를 활용하여 구현되었습니다.
- 처음에는 `Action`, `Reducer`, `Dispatch를` 활용하는 기본적인 Redux 방식으로 상태 관리를 구현했습니다.
- 이후 Redux의 미들웨어를 도입하여 상태 관리 로직을 확장했습니다.
- 최종적으로 `Redux Toolkit Query(RTK Query)`를 사용하여 서버 상태 관리를 구현했습니다.

### 5-1. Redux의 기본방식을 적용한 상태관리

- 프로젝트의 root index.tsx에서 Redux 스토어를 설정했습니다.

```tsx
// index.tsx
const store = configureStore({
  reducer: rootReducer,
});
```

- 이 스토어에는 `users` 리듀서가 포함되어 있습니다.
- 전역적으로 관리하고자 하는 상태의 리듀서가 추가될 수 있습니다.

```tsx
// modules/index.ts
const rootReducer = combineReducers({
  usersReducer,
});

export default rootReducer;
```

- `SET_USERS`, `ADD_USER`, `UPDATE_USERS` 액션 타입을 통해 유저 데이터 상태를 리듀서로 전달합니다.
- `usersReducer`는 받은 타입에 따라 적절한 상태를 변경하고 반환합니다.

```ts
// modules/users
const usersReducer = (
  state = initialState,
  action: IUserDataActions,
): IUserDataState => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_USERS:
      return {
        ...state,
        users: state.users.map((user) =>
          action.payload.includes(user.id)
            ? { ...user, isDeleted: !user.isDeleted }
            : user,
        ),
      };
    default:
      return state;
  }
};
```

> Redux 전역 상태를 사용하여 모든 컴포넌트에서 유저 데이터를 활용하고 변경할 수 있습니다.

- 특정 컴포넌트에서 상태 변경이 발생하면, 해당 변경 사항은 전체 애플리케이션에 바로 반영됩니다.

```jsx
// Home 컴포넌트 - 유저 삭제 처리
const handleDeleteUsers = (ids: number[]) => {
  updateUserData(ids, true, dispatch);
};

// DeletedUsers 컴포넌트 - 유저 복구 처리
const restoreUser = (ids: number[]) => {
  updateUserData(ids, false, dispatch);
};

// AddUserForm 컴포넌트 - 새로운 유저 추가 처리
const onSubmit = (data: IUser) => {
  const newUserData: IUser = {
    id: lastId + 1,
    nickname: data.nickname,
    birthday: data.birthday,
    sex: data.sex,
    isDeleted: false,
  };

  addUserData(newUserData, dispatch);
};
```

</br>

### 5-2. Redux의 미들웨어 추가하기

#### 5-2-1. 기존 Redux 로직

- 전역 상태관리로 Redux 라이브러리를 사용하고 있습니다.
- 하지만 사용중인 Redux의 로직은 `Context API`와 `useReducer` 훅을 사용한 방식과의 큰 차이점이 없습니다.
- Redux는 Context API에는 존재하지 않는 `미들웨어(Middleware)`가 존재합니다.

#### 5-2-2. 미들웨어란?

- Redux의 미들웨어를 사용하면 액션 객체가 리듀서에서 처리되기 전에 다른 작업을 수행할 수 있습니다.

> 즉, action -> middleware -> dispatch -> reducer 과정으로 액션이 디스페치되면 리듀서에서 해당 액션을 실행하기 전에 추가적인 작업을 수행합니다.

#### 5-2-3. 미들웨어에서 사용하는 다양한 작업들

- 특정 조건에 따라 액션이 무시되게 만듭니다.
- 액션이 디스패치 됐을 때 이를 수정해서 리듀서에 전달되도록 합니다.
- 특정 액션이 발생했을 때 특정 함수를 실행되도록 합니다.

> 이러한 특징은 특히 **비동기 작업 처리**에서 많이 사용됩니다.

#### 5-2-4. 미들웨어 만들어보기

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

#### 5-2-5. 미들웨어 라이브러리 redux-thunk 프로젝트에 적용하기

- redux 비동기 작업으로는 `redux-thunk`, `redux-saga`가 많이 사용됩니다.
- `redux-thunk`는 리덕스에서 비동기 작업을 처리 할 때 가장 많이 사용되는 미들웨어입니다.
- 이 미들웨어를 사용하면 **액션객체가 아닌 함수를 디스패치** 할 수 있습니다.

> thunk(미들웨어)를 사용하여 apis 파일에서 비동기 처리하던 로직을 redux내에서 처리되도록 수정했습니다.

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

#### 5-2-6. 미들웨어 사용후 느낀점

- Redux의 기본적인 액션은 동기적인 페이로드를 전달하는 객체입니다.
- 즉, 리듀서에 전달되었을 때 최종 값을 가지고 있어야합니다.
- 하지만, 데이터 요청과 같은 비동기 작업은 응답을 기다려야 합니다.
- 이를 위해 사용되는 것이 `middleware` 입니다.
- `middleware` 덕분에 액션은 `Promise` 결과를 기다리고 리듀서에 전달 될 수 있습니다.
- `Promise`의 `pending`, `fulfilled`, `rejected`의 상태에 따른 활용도 가능합니다.
- 기존의 비동기 함수 내부에서 `dispatch`를 호출하는 방법도 동일한 동작을 지원했으나
- 애플리케이션의 상태를 예측 가능하게 만들자는 Redux 철학에는 `middleware`를 이용하여 비즈니스 로직을 중앙집중화하는게 적합합니다.

</br>

### 5-3. RTK Query를 사용하여 서버상태 관리하기

- Redux의 미들웨어를 적용하여 비동기 처리를 통해 중앙에서 관리할 수 있었습니다.
- 다만, 현재 프로젝트에서 관리하던 상태는 서버 상태로서 관리되는 것이 효율성과 단순화에 좋다고 판단되었습니다.
- `RTK Query`는 미들웨어, 액션, 리듀서 작성을 간소화하고 서버 데이터 `캐싱`, `업데이트`, `리패칭`을 효율적으로 관리합니다.

#### 5-3-1. RTK Query 주요 특징

- 자동 데이터 캐싱  
  : 서버 데이터를 받고 자동으로 캐싱해줍니다. 이는 동일한 데이터 요청에 대해 불필요한 네트워크 요청을 방지합니다.
- 데이터 패칭 및 동기화  
  : `useQuery`, `useMutation`의 React Hooks을 제공합니다. 이는 컴포넌트 내에서 API 요청을 쉽게 처리하고 데이터 상태를 관리하게 해줍니다.
- 데이터 업데이트 및 재검증  
  : 데이터가 변경되었을 때, RTK Query는 자동으로 데이터를 재검증하고 캐시를 무효화 합니다.

> 위의 특징은 React Query, SWR에서 제공해주는 특징과 비슷합니다.

#### 5-3-2. RTK Query만의 특징

RTK Query는 `React Query`, `SWR`과 같은 데이터 패칭 기술과 비슷하지만 특별한 접근 방식을 API 디자인에 통합했습니다.

- Redux 통함  
  : RTK Query는 Redux 상태 관리 시스템과 통합되어 있습니다.  
  이는 Redux를 기반으로 하는 애플리케이션에서 **전체 애플리케이션 상태를 하나의 저장소에서 관리**할 수 있도록 해줍니다.
- Redux DevTools 통합  
  : Redux DevTools와의 통합을 통해 상태 변화를 추적하고 디버깅에 용이하게 해줍니다.

> Redux를 사용하는 프로젝트라면 RTK Query를 함께 사용하여 일관된 상태 관리를 가능토록 할 수 있습니다.  
> Redux에 의존하지 않는 프로젝트에는 상대적으로 가벼운 React Query, SWR의 사용이 적합할 수 있습니다.

#### 5-3-3. RTK Query 사용하기

- RTK Query는 API 슬라이스를 정의하여 사용합니다.
- 이는 서버와의 통신을 위한 여러 엔드포인트를 정의하는 방식으로 작동합니다.

```tsx
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
```

#### 5-3-4. RTK Query를 통해 관리되는 서버 상태 사용하기

- RTK Query를 사용하면 컴포넌트내에서 데이터 조회, 업데이트가 가능합니다.
- 상태는 전역적으로 관리되기에 필요한 컴포넌트 내에서 사용하기 용이합니다.
- 데이터 캐싱과 리패칭을 통한 동기화 처리에 효율적입니다.

```tsx
// 유저 데이터 조회 요청
const { data: users, isLoading, isError } = useGetUsersQuery();
// 유저 정보 업데이트 요청
const [updateUser] = useUpdateUsersMutation();
// 유저 추가 요청
const [addUser] = useAddUserMutation();

const restoreUser = async (ids: number[]) => {
  await updateUser({ ids: ids, updateValue: false });
};

const onSubmit = async (data: IUser) => {
  const newUserData: IUser = {
    id: lastId + 1,
    nickname: data.nickname,
    birthday: data.birthday,
    sex: data.sex,
    isDeleted: false,
  };

  await addUser(newUserData);
  onClose();
};
```

#### 5-3-5. 미들웨어 사용후 느낀점

- RTK Query를 사용하면 서버와의 상호작용을 처리하는 코드를 줄여 프로젝트의 복잡성을 낮출 수 있습니다.
- 자동 캐싱, 데이터 무효화, 리패칭 기능은 성능 최적화에 도움을 줍니다.
- RTK Query의 사용은 Redux의 원래 목적인 예측 가능한 상태 관리를 유지하면서 비동기 작업을 쉽고 효율적으로 처리할 수 있게 해줍니다.
- RTK Query는 Redux를 이용한 상태 관리에서 비동기 로직이 필요한 서버 상태 관리에 매우 효율적인 도구입니다.

</br>

## 6. 주요 기능 설명

[목차로 돌아가기](#목차)

### 6-1. Home 유저 리스트 필터

- 전체 유저 리스트에서 삭제되지 않은 유저를 가져옵니다.

```tsx
// Home.tsx
const { data: users, isLoading, isError } = useGetUsersQuery();
const activeUsers = users?.filter((user) => !user.isDeleted) ?? [];
```

- `Home` 컴포넌트에서 현재필터 상태를 관리합니다.
- 삭제되지 않은 유저 데이터와 현재필터를 헬퍼 함수에 전달하여 필터에 맞게 정렬된 유저 목록을 생성합니다.

```tsx
// Home 컴포넌트
const [currentFilter, setCurrentFilter] = useState(FILTER_LIST[0]);
const sortedUsers = sortUsers(activeUsers, currentFilter);


// JSX
{sortedUsers.map((user) => (
    <Thumbnail
     key={user.id}
     user={user}
     isChecked={checkedUserIds.includes(user.id)}
     onCheckboxChange={onCheckboxChange}
     isActive={isActive}
    />
```

- `FilterButton` 컴포넌트를 통해 사용자가 현재 필터 상태를 변경할 수 있는 기능을 제공합니다.

```tsx
<FilterButton
  currentFilter={currentFilter}
  setCurrentFilter={setCurrentFilter}
  isActive={isActive}
/>
```

### 6-2. Home 유저 선택 및 삭제

- `선택` 버튼이 활성화 되면 썸네일에 `체크박스`와 하단에 유저 `삭제하기` 버튼이 활성화 됩니다.

```tsx
<S.Switch onClick={toggleActive} $isActive={isActive}>
  {isActive ? TOGGLE_ACTIVE.on : TOGGLE_ACTIVE.off}
</S.Switch>
```

- 사용자는 삭제할 유저를 복수 선택할 수 있습니다.
- 선택된 유저들의 Ids는 상태로 관리됩니다.

```tsx
const [checkedUserIds, setCheckedUserIds] = useState<number[]>([]);
```

- 하단 활성화된 `삭제하기` 버튼을 클릭하면, 선택된 유저들에 대한 삭제 API 요청이 실행되며,
- 성공적으로 삭제되면 해당 유저들의 상태가 업데이트됩니다.

```tsx
// 이벤트 핸들링 함수
const handleDeleteUsers = async (ids: number[]) => {
  await updateUser({ ids: ids, updateValue: true }); // 유저 정보 업데이트
  setIsActive((prev) => !prev);
  setCheckedUserIds([]);
};

// 삭제하기 버튼을 가지고 있는 하단 컴포넌트
<Footer
  isActive={isActive}
  checkedUserIds={checkedUserIds}
  onUsersDelete={handleDeleteUsers}
/>;
```

### 6-3. 새로운 유저 등록하기

- `Home` 화면의 첫 썸네일에서는 사용자에게 유저 등록 기능을 제공합니다.

```tsx
<Thumbnail onAddClick={onShowAddUserForm} isActive={isActive} />
```

- 이 썸네일의 버튼을 클릭하면 배경 딤처리와 함께 `AddUserForm` 컴포넌트가 모달 형태로 나타납니다.

```tsx
// 이벤트 핸들링 함수
const onShowAddUserForm = () => {
  setShowAddUserForm(true);
};

// JSX
{
  showAddUserForm && (
    <S.Dimmer onClick={handleOutsideClick}>
      <S.ModalPopUp ref={formRef} $isMobile={isMobile}>
        <AddUserForm onClose={offShowAddUserForm} />
      </S.ModalPopUp>
    </S.Dimmer>
  );
}
```

- `AddUserForm` 컴포넌트에서 `users` 상태를 가져와서 새로운 유저의 ID 값을 계산합니다.

```tsx
// AddUserForm 컴포넌트
const { data: users, isError } = useGetUsersQuery();
const lastId = users[users.length - 1]?.id || 0;
```

- 유저 등록을 위한 폼은 `React Hook Form`을 활용하여 구현되어 있습니다.
- 이를 통해 사용자가 입력한 데이터를 수집하고, 새로운 유저 데이터를 생성하여 API를 통해 서버에 유저 추가 요청을 합니다.

```tsx
// AddUserForm 컴포넌트
const { register, handleSubmit, formState, control, setValue, trigger } =
  useForm<IUser>();

const onSubmit = async (data: IUser) => {
  const newUserData: IUser = {
    id: lastId + 1,
    nickname: data.nickname,
    birthday: data.birthday,
    sex: data.sex,
    isDeleted: false,
  };

  await addUser(newUserData);
  onClose();
};
```

### 6-4. 삭제된 유저 페이지

- 전체 유저 데이터 중 삭제된 유저들의 목록을 보여줍니다.

```tsx
// DeletedUsers 컴포넌트
const { data: users, isLoading, isError } = useGetUsersQuery();
const deletedUsers = users.filter((user) => user.isDeleted);

// JSX
<UserList
  users={deletedUsers}
  selectUser={selectUser}
  selectedUserId={selectedUser?.id}
/>;
```

- 페이지에서는 삭제된 유저 리스트 중 `선택`된 유저의 썸네일을 나타냅니다.
- 첫 렌더링에서는 가장 상위 유저가 선택되어 있습니다.
- 사용자가 특정 유저를 선택하면 선택된 유저 상태로 썸네일이 변경되며,
- 해당 유저 썸네일의 `복구하기` 버튼이 활성화 됩니다.

```tsx
// DeletedUsers 컴포넌트
const [selectedUser, setSelectedUser] = useState<IUser | undefined>(
  deletedUsers[0],
);
const [onRestoreBtn, setOnRestoreBtn] = useState<boolean>(false);

const selectUser = (id: number) => {
  if (selectedUser?.id !== id) {
    setSelectedUser(deletedUsers.find((user) => user.id === id));
  }
  setOnRestoreBtn(true);
};

// JSX
<Thumbnail
  onRestoreClick={restoreUser}
  user={selectedUser}
  isOnRestoreBtn={onRestoreBtn}
/>;
```

- 활성화된 `복구하기` 버튼을 클릭하면, 해당 유저의 데이터를 활성화로 변경하는 요청을 보냅니다.

```tsx
// DeletedUsers 컴포넌트
const restoreUser = async (ids: number[]) => {
  await updateUser({ ids: ids, updateValue: false });
};
```

### 6-5. 반응형 웹 애플리케이션

- `styled-components`의 `theme`를 사용하여 `mobile`, `tablet`, `desktop`에 해당하는 크기를 지정합니다.
- 이는 미디어 쿼리를 중항화하여 관리할 수 있습니다.

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

- 현재 디바이스에 따라 반응형으로 적용되는 스타일을 컴포넌트에 적용합니다.

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

[목차로 돌아가기](#목차)
