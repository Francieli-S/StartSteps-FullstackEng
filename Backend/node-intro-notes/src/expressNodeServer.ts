import { port } from './config.js';
import express, { Request, Response } from 'express';
// I can 'import' instead of 'require', but it must have the file extension.
// I cannot import from .ts since all of the TS in Node is compiled to JS.
import { consoleMessage, getExampleMessage } from './helper.js';
import { logServerMessage } from './logger.js';
import { dummyData, IStudent } from './dummyData.js';

// create a Node server using express
const app = express();

// sample data
let students = [...dummyData];

// middleware provided by express to parse JSON requests
app.use(express.json());

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
app.post('/students', (req: Request, res: Response) => {
  // add body validation
  const newStudent: IStudent = req.body;
  students.push(newStudent);
  res.status(201).json(newStudent);
});

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

// Start the server
app.listen(port, () => {
  console.log(consoleMessage);
  logServerMessage('This server is logging at: ');
});
