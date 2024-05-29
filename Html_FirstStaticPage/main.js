// Task 1 
const buttonElementName = document.getElementById('submit-button-name')
const inputElementName = document.getElementById('user-input-name')

buttonElementName.addEventListener('click', () => {
  const inputValue = inputElementName.value
  alert(`Hi, ${inputValue}.`)
})

// Task 2
const buttonElementNumber = document.getElementById('submit-button-number')
const inputElementNumber = document.getElementById('user-input-number')

const correctNumber = Math.floor(Math.random() * 10) + 1
console.log(correctNumber);

buttonElementNumber.addEventListener('click', () => {
  while(true) {
    const inputValue = parseInt(inputElementNumber.value)
    if (!isNaN(inputValue)) {
      if (inputValue === correctNumber) {
        alert('You guessed the right number!')
        break
      } else {
        alert('Sorry, try again.')
      }
    } else {
      alert('Please, enter a valid number.')
    }
    break
  }
})

// Task 3
const buttonElemSmallerBigger = document.getElementById('submit-button-smallerXbigger')
const inputElemSmallerBigger = document.getElementById('user-input-smallerXbigger')

buttonElemSmallerBigger.addEventListener('click', () => {
  while(true) {
    const inputValue = parseInt(inputElemSmallerBigger.value)
    if (!isNaN(inputValue)) {
      if (inputValue === correctNumber) {
        alert('You guessed the right number!')
        break
      } else if (inputValue > correctNumber) {
        alert('Try a smaller number.')
      }
      else if (inputValue < correctNumber) {
        alert('Try a bigger number.')
      }
    } else {
      alert('Please, enter a valid number.')
    }
    break
  }
})

// Task 4 Quote generation
const quotes = [
  {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
  },
  {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
  },
  {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
  }
];




// Task 5 To do list
const buttonAddTask = document.getElementById('task-add')
const inputTask = document.getElementById('task-input')
const listTasks = document.getElementById('task-list')

function addTask(taskText) {
  // listTasks.value = []
  // console.log('hi', listTasks.value);

  // create parent div elem and give it a class name:
  const taskItem = document.createElement('div')
  taskItem.className = 'task-item'
  
  // take the argument and add it as the inner text to another div element:
  const taskTextElement = document.createElement('div')
  taskTextElement.innerText = taskText

  // create a delete button:
  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'Done'
  deleteButton.addEventListener('click', () => {
    taskItem.remove()
  })

  taskItem.appendChild(taskTextElement)
  taskItem.appendChild(deleteButton)
  listTasks.appendChild(taskItem)  
}

buttonAddTask.addEventListener('click', () => {
  if(inputTask.value !== '') {
    addTask(inputTask.value)
  } else {
    alert('You should enter a task.')    
  }
  inputTask.value = ''
})



