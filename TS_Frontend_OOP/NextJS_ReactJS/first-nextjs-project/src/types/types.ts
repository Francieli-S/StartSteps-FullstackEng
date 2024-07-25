export interface IPost {
  id: number;
  title: string;
  comment?: string;
  creationDate?: Date;
  user: User;
}

export interface User {
  name: string
  surname: string
  age: number
}

export interface PostParams {
  params: {
    id: string;
  };
}
