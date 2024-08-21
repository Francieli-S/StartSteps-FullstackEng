export interface IStudent {
  id: string;
  name: string;
  grade: number;
}

export const dummyData: IStudent[] = [
  { id: '1', name: 'Foxy', grade: 9.9 },
  { id: '2', name: 'Gato', grade: 9.8 },
  { id: '3', name: 'Chico', grade: 9.7 },
  { id: '4', name: 'Bento', grade: 9.6 },
  { id: '5', name: 'Mim', grade: 9.5 },
];
