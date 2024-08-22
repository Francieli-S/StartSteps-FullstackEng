import express, { Request, Response, NextFunction } from 'express';
// I cannot import from .ts since all of the TS in Node is compiled to JS.
import userHandlers from './userHandlers.js';

const router = express.Router();


// Creating API Endpoints

// GET /students
router.get('/students', userHandlers.getAll);

// GET /students/:id
router.get('/students/:id', userHandlers.get);

// middleware to check authentication, this one is not global.
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization === 'Bearer token') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

// in the post, add this one 'next' after the authMiddleware
const validateStudent = (req: Request, res: Response, next: NextFunction) => {
  console.log('REQ.BODY', req.body);
  if (!req.body || !req.body.name || typeof req.body.grade !== 'string') {
    res.status(400).json({ message: 'Invalid student data.' });
  } else {
    next();
  }
};

// POST /students
router.post('/students', authMiddleware, validateStudent, userHandlers.post);

// PUT /students/:id - update student grade
router.put('/students/:id', userHandlers.put);

// DELETE /students/:id
router.delete('/students/:id', userHandlers.remove);

// ALL /secret
// used to load middleware functions
// I do not get it, maybe later with middleware and examples
router.all('/secret', (req, res) => {
  console.log('Accessing the secret section...');
});

export default router;
