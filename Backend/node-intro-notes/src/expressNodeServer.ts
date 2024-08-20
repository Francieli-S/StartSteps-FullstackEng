import { port } from './config.js';
import express, { Request, Response } from 'express';
// I can 'import' instead of 'require', but it must have the file extension.
// I cannot import from .ts since all of the TS in Node is compiled to JS.
import { consoleMessage, getExampleMessage } from './helper.js';
import { logServerMessage } from './logger.js';

// create a Node server using express
const app = express();

// sample data
let id = 2;
let users = [
  { id: 1, name: 'Foxy' },
  { id: 2, name: 'Gato' },
];

// middleware provided by express to parse JSON requests
app.use(express.json());

// GET /users
app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

// GET /users/:id
app.get('/users/:id', (req: Request, res: Response) => {
  const userID = parseInt(req.params.id); // because the inputs/body come as string
  const user = users.find((user) => user.id === userID);

  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

// POST /users
app.post('/users', (req: Request, res: Response) => {
  const newUser = { id: id++, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id
app.put('/users/:id', (req: Request, res: Response) => {
  const userID = parseInt(req.params.id); // because the inputs/body come as string
  const updateUser = req.body;

  users = users.map((user) => {
    if (user.id === userID) {
      return { ...user, ...updateUser };
    } else {
      return user;
    }
  });
  res.json(updateUser);
});

// DELETE /users/:id
app.delete('/users/:id', (req: Request, res: Response) => {
  const userID = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userID);
  res.json({ message: 'User deleted successfully' });
});

// Start the server

app.listen(port, () => {
  console.log(consoleMessage);
  logServerMessage('This server is logging at: ');
});
