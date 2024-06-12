function createUser(name, id, noOfProjects) {
  let user = {};
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  user.getProjects = function () {};
  user.changeName = function () {};
  user.incrementProject = function () {};
  user.decrementProject = function () {};

  return user;
}

const user1 = createUser('Foxy', 1, 3);
const user2 = createUser('Gato', 2, 5);

let users = [user1, user2];

function displayUserInfo(users) {
  const personInfoElement = document.getElementById('person-info');

  personInfoElement.innerHTML = '';

  users.forEach((user) => {
    const userInfoParagraph = document.createElement('p');
    userInfoParagraph.textContent = `Name: ${user.name}, Age: ${user.age}, Id: ${user.id}`;
    personInfoElement.appendChild(userInfoParagraph);
  });
}

displayUserInfo(users);

function removeUser() {
  const userIdInput = document.getElementById('userId');
  const userId = +userIdInput.value;

  if (!isNaN(userId)) {
    const indexToRemove = users.findIndex((user) => user.id === userId);

    if (indexToRemove !== -1) {
      users.splice(indexToRemove, 1);

      displayUserInfo(users);

      userIdInput.value = '';
    } else {
      alert('user does not exist.');
    }
  } else {
    alert('enter a valid user id');
  }
}

function removeUser2() {
  const userIdInput = document.getElementById('userId');
  const userId = +userIdInput.value;

  if (!isNaN(userId)) {
    const indexToRemove = users.findIndex((user) => user.id === userId);

    if (indexToRemove !== -1) {
      users = users.filter((user) => user.id !== userId);

      displayUserInfo(users);

      userIdInput.value = '';
    } else {
      alert('user does not exist.');
    }
  } else {
    alert('enter a valid user id');
  }
}

const userList = [];

function registerUser() {
  const username = document.getElementById('username').value;
  const name = document.getElementById('name').value;
  const age = +document.getElementById('age').value;
  const email = document.getElementById('email').value;

  if (!username || !name || isNaN(age) || !email) {
    alert('You shoul fill in all the fields.');
  }

  // check if user exist then edit or create a new one
  const isUser = userList.includes(user.id);

  const userId = userList.length + 1;

  const newUser = {
    id: userId,
    username: username,
    name: name,
    age: age,
    email: email,
  };

  userList.push(newUser);

  displayRegisteredUser();
  clearRegistrationForm();
  console.log('updated list: ', userList);
}

const displayRegisteredUser = () => {
  const registeredUserElem = document.getElementById('registered-user');
  registeredUserElem.innerHTML = '';

  userList.forEach((user) => {
    const userInfoParag = document.createElement('p');
    const editBtn = document.createElement('button');
    userInfoParag.textContent = `ID: ${user.id}, Username: ${user.username}, Name: ${user.name}, Age: ${user.age}, Email: ${user.email}.`;
    registeredUserElem.appendChild(userInfoParag);
    editBtn.textContent = 'Edit';
    registeredUserElem.appendChild(editBtn);

    editBtn.addEventListener('click', () => {
      editUser(user);
    });
  });
};

const clearRegistrationForm = () => {
  document.getElementById('username').value = '';
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('email').value = '';
};

const editUser = (user) => {
  const username = (document.getElementById('username').value = user.username);
  const name = (document.getElementById('name').value = user.name);
  const age = (document.getElementById('age').value = +user.age);
  const email = (document.getElementById('email').value = user.email);
  console.log('user: ', user);
};

// Afternoon Tasks
// Task 1
function createStudent(name, surname, hobby, hasPet) {
  const student = {
    name: name,
    surname: surname,
    hobby: hobby,
    hasPet: hasPet,
  };
  return student;
}

const studentOne = createStudent(
  'Gato',
  'Companheiro',
  'play with paper ball',
  true
);

function displayStudent() {
  const studentInfoElem = document.getElementById('student-info');
  studentInfoElem.textContent = `This is ${studentOne.name} ${
    studentOne.surname
  }. ${studentOne.name}'s hobby is ${studentOne.hobby}. ${studentOne.name} ${
    studentOne.hasPet ? 'has' : 'does not have'
  } pets.`;
}

displayStudent();

// Task 2
const studentTwo = createStudent(
  'Milu',
  'Snowflake',
  'cuddle with my sister Cleo',
  true
);

const studentThree = createStudent(
  'Foxy',
  'Menina',
  'run after tiny plastic objects',
  false
);

const studentFour = createStudent(
  'Susam',
  'Orange',
  'hunt bug in the balkon',
  true
);

const studentFive = createStudent(
  'Belinha',
  'Cantora',
  'watch bird from the window',
  false
);

const arrStudents = [studentOne, studentTwo, studentThree, studentFour, studentFive]

function studentList() {
  const studentListElem = document.getElementById('student-list')

  arrStudents.forEach(student => {
    const oneStudentElem = document.createElement('li')
    oneStudentElem.textContent = `This is ${student.name} ${
      student.surname
    }. Their hobby is ${student.hobby}. ${student.name} ${
      student.hasPet ? 'has' : 'does not have'
    } pets.`;
    studentListElem.appendChild(oneStudentElem)
  })
}

studentList()

// Task 3
function filterStudentsPets() {
  const studentListElem = document.getElementById('student-pets-list')

  arrStudents.filter(student => {
    if (student.hasPet) {
      const oneStudentElem = document.createElement('li')
      oneStudentElem.textContent = `This is ${student.name} ${
        student.surname
      }. Their hobby is ${student.hobby}. ${student.name} ${
        student.hasPet ? 'has' : 'does not have'
      } pets.`;
      studentListElem.appendChild(oneStudentElem)

    }
  })
}

filterStudentsPets()