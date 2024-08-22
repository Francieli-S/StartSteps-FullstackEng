import { Request, Response } from 'express';
// I cannot import from .ts since all of the TS in Node is compiled to JS.
import { dummyData } from './dummyData.js';
import type { IStudent } from './dummyData.ts';

// sample data
let students = [...dummyData];

// GET /students
// all the filters are added here, BUT there is a limit for the url, be aware.
const getAll = (req: Request, res: Response) => {
  const grade = req.query.grade; // /students?grade=A
  if (grade) {
    const filterStudents = students.filter(
      (student) => student.grade === grade
    );
    if (filterStudents.length > 0) {
      res.status(200).json(filterStudents);
    } else {
      res
        .status(404)
        .json({ message: `No students found with grade ${grade}.` });
    }
  } else {
    res.status(200).json(students); // if no filter, return all
  }
};

// GET /students/:id
const get = (req: Request, res: Response) => {
  const studentID = req.params.id;
  const student = students.find((student) => student.id === studentID);

  const includeGrade = req.query.includeGrade === 'true'; // /students/1?includeGrade=true

  if (student) {
    const response = includeGrade
      ? student
      : { id: student.id, name: student.name }; 
    res.status(200).set(`${studentID}-student-found`, 'true').json({
      success: true,
      data: response,
      message: 'Student retrived successfully.',
    }); // return a specific resource(user with the id and/or not with grade)
  } else {
    res
      .status(404)
      .set(`${studentID}-student-found`, 'false')
      .json({ success: false, message: 'Student not found' });
  }
};

// POST /students
const post = (req: Request, res: Response) => {
  console.log('received data: ', req.body);
  const id = Math.floor(Math.random() * 100);
  // joi is an used library to validate data
  // const newStudent: IStudent = {id: '', name: 'g', grade: 5, hobby: 'play'};
  const newStudent: IStudent = { id, ...req.body };
  students.push(newStudent);
  res.status(201).json(newStudent);
};

// PUT /students/:id - update student grade
const put = (req: Request, res: Response) => {
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
};

// DELETE /students/:id
const remove = (req: Request, res: Response) => {
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
};

export default { getAll, get, post, put, remove };
