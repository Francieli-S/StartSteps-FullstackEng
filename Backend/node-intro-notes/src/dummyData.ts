export interface IStudent {
  id: string;
  name: string;
  grade: string;
}

export const dummyData: IStudent[] = [
  { id: '1', name: 'Foxy', grade: 'A' },
  { id: '2', name: 'Gato', grade: 'B' },
  { id: '3', name: 'Chico', grade: 'A' },
  { id: '4', name: 'Bento', grade: 'C' },
  { id: '5', name: 'Mim', grade: 'B' },
];
