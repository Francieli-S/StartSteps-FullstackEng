export enum TaskStatus {
  TODO = 'todo',
  INPROGRESS = 'in progress',
  COMPLETED = 'completed',
}

export type Task = {
  id: number,
  name: string,
  status: TaskStatus,
}