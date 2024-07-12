import Todo from "./function";

// Code optimized by using classes
const courseTodo = new Todo()
courseTodo.addTask('review lesson 13')
courseTodo.addTask('work on projects')
courseTodo.addTask('ask about classes')
courseTodo.displayTasks()

courseTodo.removeTask('review lesson 13')
courseTodo.displayTasks()


// import { addTask, removeTask, displayTasks } from "./function";

// let tasks: Task[] = []

// addTask('practice TS', tasks)
// addTask('feed the cats', tasks)
// addTask('learn german', tasks)

// displayTasks(tasks)

// tasks = removeTask('feed the cats', tasks)

// displayTasks(tasks)