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
      users = users.filter(user => user.id !== userId)

      displayUserInfo(users);

      userIdInput.value = '';
    } else {
      alert('user does not exist.');
    }
  } else {
    alert('enter a valid user id');
  }
}

const userList = []

function registerUser() {
  const username = document.getElementById('username').value
  const name = document.getElementById('name').value
  const age = +document.getElementById('age').value
  const email = document.getElementById('email').value

  if (!username || !name || isNaN(age) || !email) {
    alert('You shoul fill in all the fields.')
  }

  const userId = userList.length + 1

  const newUser = {
    id: userId,
    username: username,
    name: name,
    age: age,
    email: email
  }

  userList.push(newUser)

  displayRegisteredUser()
  clearRegistrationForm()
  console.log('updated list: ', userList);
}

const displayRegisteredUser = () => {
  const registeredUserElem = document.getElementById('registered-user')
  registeredUserElem.innerHTML = ''

  userList.forEach(user => {
    const userInfoParag = document.createElement('p')
    userInfoParag.textContent = `ID: ${user.id}, Username: ${user.username}, Name: ${user.name}, Age: ${user.age}, Email: ${user.email}.`
    registeredUserElem.appendChild(userInfoParag)
  })
}

const clearRegistrationForm = () => {
  document.getElementById('username').value = ''
  document.getElementById('name').value = ''
  document.getElementById('age').value = ''
  document.getElementById('email').value = ''
}


