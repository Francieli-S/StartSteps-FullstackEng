"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
// Optimize the code by using classes
class Todo {
    constructor() {
        this.addTask = (name) => {
            const id = Math.floor(Math.random() * 100);
            this.tasks.push({ name, id, status: types_1.TaskStatus.TODO });
        };
        this.displayTasks = () => {
            this.tasks.forEach(({ id, name }) => {
                console.log(`${id}: ${name} - ${types_1.TaskStatus.TODO}`);
            });
        };
        this.removeTask = (name) => {
            this.tasks = this.tasks.filter((task) => task.name !== name);
            console.log(this.tasks);
        };
        this.tasks = [];
    }
}
exports.default = Todo;
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
