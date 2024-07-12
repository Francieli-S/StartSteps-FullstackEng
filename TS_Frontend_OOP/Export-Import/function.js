"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTask = exports.displayTasks = exports.addTask = void 0;
const types_1 = require("./types");
const addTask = (name, tasks) => {
    const id = Math.floor(Math.random() * 100);
    tasks.push({ name: name, id: id, status: types_1.TaskStatus.TODO });
};
exports.addTask = addTask;
const displayTasks = (tasks) => {
    tasks.forEach(({ id, name }) => {
        console.log(`${id}: ${name} - ${types_1.TaskStatus.TODO}`);
    });
};
exports.displayTasks = displayTasks;
const removeTask = (name, tasks) => {
    return tasks.filter((task) => task.name !== name);
};
exports.removeTask = removeTask;
