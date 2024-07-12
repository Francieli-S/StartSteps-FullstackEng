import { addTask, removeTask, displayTasks } from "./function";
import { Task, TaskStatus } from "./types";

let tasks: Task[] = []

addTask('practice TS', tasks)
addTask('feed the cats', tasks)
addTask('learn german', tasks)

displayTasks(tasks)

tasks = removeTask('feed the cats', tasks)

displayTasks(tasks)