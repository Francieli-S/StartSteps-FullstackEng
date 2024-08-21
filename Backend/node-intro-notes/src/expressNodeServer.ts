import { port } from './config.js';
import express, { Request, Response, NextFunction } from 'express';
// I cannot import from .ts since all of the TS in Node is compiled to JS.
import { consoleMessage } from './helper.js';
import { logServerMessage } from './logger.js';
import { dummyData } from './dummyData.js';
import { IStudent } from './dummyData';

// create a Node server using express
const app = express();

// sample data
let students = [...dummyData];

// middleware provided by express to parse JSON requests
app.use(express.json());

// middleware to check authentication
// when testing in Postman a post to create a new student for example
// and this middleware was added to the post, we have to provide an Authorization
// and choose the type, for example: Bearer Token, and input the 'token' that is
// going to be checked if it contains it

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization === 'Bearer token') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

// in the post, add this one 'next' after the authMiddleware
const validation = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body || !req.body.name) {
    res.status(403).json({ message: 'Name is required.' });
  } else {
    next();
  }
};

// GET /students
app.get('/students', (req: Request, res: Response) => {
  res.json(students);
});

// GET /students/:id
app.get('/students/:id', (req: Request, res: Response) => {
  const studentID = req.params.id; // because the inputs/body come as string
  const student = students.find((student) => student.id === studentID);

  if (student) {
    res.json(student); // return a specific resource(user with the id)
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

// POST /students
app.post(
  '/students',
  authMiddleware,
  validation,
  (req: Request, res: Response) => {
    const id = Math.floor(Math.random() * 100);
    // joi is an used library to validate data
    // const newStudent: IStudent = {id: '', name: 'g', grade: 5, hobby: 'play'};
    const newStudent: IStudent = {id, ...req.body};
    students.push(newStudent);
    res.status(201).json(newStudent);
  }
);

// PUT /students/:id - update student grade
app.put('/students/:id', (req: Request, res: Response) => {
  const studentID = req.params.id; // because the inputs/body come as string
  const studentIndex = students.findIndex(
    (student) => student.id === studentID
  );
  const newGrade = req.body.grade;

  if (studentIndex !== -1) {
    students[studentIndex].grade = newGrade;
    res.json(students[studentIndex]);
  } else {
    res.status(404).json({ message: 'Student not found.' });
  }
});

// DELETE /students/:id
app.delete('/students/:id', (req: Request, res: Response) => {
  const studentID = req.params.id;
  const studentIndex = students.findIndex(
    (student) => student.id === studentID
  );

  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);
    res.json(204).send();
  } else {
    res.status(404).json({ message: 'Student not found.' });
  }
});

// ALL /secret
// used to load middleware functions
// I do not get it, maybe later with middleware and examples
app.all('/secret', (req, res) => {
  console.log('Accessing the secret section...');
});

// TO MOVE THIS PART LATER TO ANOTHER FILE

// Start the server
app.listen(port, () => {
  console.log(consoleMessage);
  logServerMessage('This server is logging at: ');
});
