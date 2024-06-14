// create the stack
const stack = [];

function push() {
  const value = prompt('Enter value to stack up');
  stack.length = stack.length++;
  stack[stack.length] = value;
  updateDisplayStack();
}

function pop() {
  if (stack.length === 0) {
    alert('Stack is empty')
    return;
  }
  const popped = stack[stack.length - 1];
  stack.length--;
  alert(`Popped value: ${popped}`)
  updateDisplayStack()
}

stack.push('You')
stack.push('I')
stack.push('Hello')
stack.push('Bye')

// create a function to display the stack
function updateDisplayStack() {
  const stackListElem = document.getElementById('stack-display');
  console.log(stackListElem);
  // stackListElem.innerHTML = ''

  for (let i = stack.length - 1; i >= 0; i--) {
    console.log(stack[i]);
    const oneElem = document.createElement('li')
    oneElem.innerText = stack[i]
    stackListElem.appendChild(oneElem)
  } 
}

updateDisplayStack();
