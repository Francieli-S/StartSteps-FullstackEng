import { Task, TaskStatus } from './types';

// Optimize the code by using classes
export default class Todo {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  addTask = (name: string): void => {
    const id = Math.floor(Math.random() * 100);
    this.tasks.push({ name, id, status: TaskStatus.TODO });
  };

  displayTasks = (): void => {
    this.tasks.forEach(({ id, name }) => {
      console.log(`${id}: ${name} - ${TaskStatus.TODO}`);
    });
  };

  removeTask = (name: string): void => {
    this.tasks = this.tasks.filter((task) => task.name !== name);
  };
}

// export const addTask = (name: string, tasks: Task[]): void => {
//   const id = Math.floor(Math.random() * 100);
//   tasks.push({ name: name, id: id, status: TaskStatus.TODO });
// };

// export const displayTasks = (tasks: Task[]): void => {
//   tasks.forEach(({id, name}) => {
//     console.log(`${id}: ${name} - ${TaskStatus.TODO}`);
//   })
// }

// export const removeTask = (name: string, tasks: Task[]): Task[] => {
//   return tasks.filter((task) => task.name !== name)
