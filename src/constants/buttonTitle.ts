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

export const SUBMIT_BUTTON = [
  {
    id: 1,
    name: '저장하기',
  },
  {
    id: 2,
    name: '복구하기',
  },
];

export interface ISubmitButton {
  id: number;
  name: string;
}