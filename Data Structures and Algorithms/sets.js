// creating sets
const mySet = new Set()
const mySet2 = new Set()

// add elements to the set, can be individualy or chainaed
mySet.add('yellow').add('gree').add('blue').add('pink').add('red')
mySet.add('yellow') // sets are for unique elements
mySet.delete('yellow') // ... to delete
mySet2.add('lamp').add('cup').add('pen').add('laptop').add('monitor')

// check if the set includes an element
const hasRed = mySet.has('red')

// function to display the set data 
function updateDisplaySets() {
  const colorParag = document.getElementById('color')
  const objectParag = document.getElementById('object')
  const colorAndObjectsParag = document.getElementById('color-and-objects')
  
  colorParag.textContent = `The Color Set contains: ${[...mySet].join(', ')}.`
  objectParag.textContent = `The Object Set contains: ${[...mySet2].join(', ')}.`
  
  // combined sets
  const combinedSets = new Set([...mySet, ...mySet2])
  colorAndObjectsParag.textContent = `The combined Set contains: ${[...combinedSets].join(', ')}.`
}

updateDisplaySets()

// function to add elements
function addNew() {
  const colorInput = document.getElementById('color-input')
  const objectInput = document.getElementById('object-input')

  let color = colorInput.value.trim()  
  let object = objectInput.value.trim() 

  if (color) {
    mySet.add(color)
  }

  if (object) {
    mySet2.add(object)
  }

updateDisplaySets()
colorInput.value = ''
objectInput.value = ''
}

