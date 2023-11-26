export interface IUser {
  id: number;
  nickname: string;
  birthday: string;
  sex: 'm' | 'w';
  isDeleted: boolean;
}

export interface IUpdateUsers {
  ids: number[];
  updateValue: boolean;
}
