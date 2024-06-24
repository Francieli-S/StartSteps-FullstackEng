const sampleHash = (string) => {
  let hash= 0;
  for(let char of string) {
      hash += (hash * 23) + char.charCodeAt(0);
  }
  return hash;
}

const generateHash = () => {
  const password = document.getElementById("password").value;
  const hash = sampleHash(password);
  document.getElementById("output").innerHTML = hash;
}

// Afternoon Task 1
const sampleHashSum = (string) => {
  let hash = 0
  for (let char of string) {
    hash += char.charCodeAt(0)
  }
  return hash
}

const generateHashSum = () => {
  const inputTask1 = document.getElementById('input-task1').value
  const hash = sampleHashSum(inputTask1)
  document.getElementById('output-task1').innerText = hash
}

// Afternoon Task 2
const sampleHashMultip = (string) => {
  let reversedString = string.split('').reverse().join('')
  let hash = 0
  for (let char of reversedString) {
    hash += char.charCodeAt(0) * Math.pow(31, reversedString.indexOf(char))
  }
  return hash
}

const generateHashMultip = () => {
  const inputTask2 = document.getElementById('input-task2').value
  const hash = sampleHashMultip(inputTask2)
  document.getElementById('output-task2').innerText = hash
}