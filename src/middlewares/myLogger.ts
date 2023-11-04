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
