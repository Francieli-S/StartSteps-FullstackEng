// Task 1
let students = [
  { name: 'Alice', category: 'engineering' },
  { name: 'Bob', category: 'medicine' },
  { name: 'Charlie', category: 'psychology' },
  { name: 'David', category: 'engineering' },
  { name: 'Eve', category: 'psychology' },
  { name: 'Frank', category: 'medicine' },
  { name: 'Grace', category: 'engineering' },
  { name: 'Henry', category: 'psychology' },
  { name: 'Ivy', category: 'engineering' },
  { name: 'Jack', category: 'medicine' },
  { name: 'Karen', category: 'psychology' },
  { name: 'Leo', category: 'engineering' },
  { name: 'Mia', category: 'psychology' },
  { name: 'Noah', category: 'engineering' },
  { name: 'Olivia', category: 'medicine' },
  { name: 'Peter', category: 'psychology' },
  { name: 'Quinn', category: 'engineering' },
  { name: 'Rachel', category: 'medicine' },
  { name: 'Sam', category: 'psychology' },
  { name: 'Tom', category: 'engineering' },
];

const filterStudentsByCategory = (array, category) => {
  return array.filter(elem => elem.category === category)
}

const searchByCategory = () => {  
  const studentList = document.getElementById('student-list')
  studentList.innerHTML = ''
  const selectCategory = document.getElementById('category').value
  
  const filterStudents = filterStudentsByCategory(students, selectCategory)
  
  filterStudents.map(student => {
    const oneStudent = document.createElement('li')
    oneStudent.textContent = student.name
    studentList.appendChild(oneStudent)
  })
}

// Task 2
let products = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'Book', category: 'Books' },
  { id: 3, name: 'Headphones', category: 'Electronics' },
  { id: 4, name: 'Chair', category: 'Furniture' },
  { id: 5, name: 'Smartphone', category: 'Electronics' },
  { id: 6, name: 'Tablet', category: 'Electronics' },
  { id: 7, name: 'Desk', category: 'Furniture' },
  { id: 8, name: 'Monitor', category: 'Electronics' },
  { id: 9, name: 'Backpack', category: 'Accessories' },
  { id: 10, name: 'Printer', category: 'Electronics' },
  { id: 11, name: 'Sofa', category: 'Furniture' },
  { id: 12, name: 'Keyboard', category: 'Electronics' },
  { id: 13, name: 'Mouse', category: 'Electronics' },
  { id: 14, name: 'Dining Table', category: 'Furniture' },
  { id: 15, name: 'Camera', category: 'Electronics' },
  { id: 16, name: 'Bed', category: 'Furniture' },
  { id: 17, name: 'Couch', category: 'Furniture' },
  { id: 18, name: 'Watch', category: 'Accessories' },
  { id: 19, name: 'Speaker', category: 'Electronics' },
  { id: 20, name: 'Rug', category: 'Furniture' }
  ];

  