// create the stack
const queue = [];

// create a function to display the stack
function updateDisplayQueue() {
  const queueListElem = document.getElementById('queue-display');
  console.log(queueListElem);
  queueListElem.innerHTML = ''

  queue.forEach(elem => {
    const oneElem = document.createElement('span')
    oneElem.innerText = elem
    queueListElem.appendChild(oneElem)
  })
}

updateDisplayQueue();

// Afternoon Tasks
// Task 2
let pass = 0
function enqueue() {
  pass++
  queue.push(`pass ${pass} `)
  updateDisplayQueue()
}

function dequeue() {
  queue.shift()
  updateDisplayQueue()
}