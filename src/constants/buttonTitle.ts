export const FILTER_LIST = [
  {
    id: 1,
    name: '생년월일 순',
  },
  {
    id: 2,
    name: '이름 순',
  },
];

export interface IFilter {
  id: number;
  name: string;
}

export const PAGE_LIST = [
  {
    id: 1,
    name: '전체 회원',
    path: '/',
  },
  {
    id: 2,
    name: '삭제 회원',
    path: '/delete',
  },
];

export interface IPage {
  id: number;
  name: string;
}

export const SUBMIT_BUTTON = {
  delete: '회원 삭제하기',
  save: '저장하기',
  recovery: '복구하기',
};

export const TOGGLE_ACTIVE = {
  on: '선택',
  off: '취소',
};
