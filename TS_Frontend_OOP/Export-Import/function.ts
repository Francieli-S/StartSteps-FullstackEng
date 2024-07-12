import { Task, TaskStatus } from './types';

export const addTask = (name: string, tasks: Task[]): void => {
  const id = Math.floor(Math.random() * 100);
  tasks.push({ name: name, id: id, status: TaskStatus.TODO });
};

export const displayTasks = (tasks: Task[]): void => {
  tasks.forEach(({id, name}) => {
    console.log(`${id}: ${name} - ${TaskStatus.TODO}`);
  })
}

export const removeTask = (name: string, tasks: Task[]): Task[] => {
  return tasks.filter((task) => task.name !== name)
}
