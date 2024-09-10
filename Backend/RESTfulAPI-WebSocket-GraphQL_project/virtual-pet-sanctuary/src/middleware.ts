import { Request, Response } from 'express';

// the name of the middleware should be the same as the controller

const createPet = (req: Request, res: Response, next: Function) => {
  const { name, species } = req.body;
  if (!name || !species) {
    res.status(400).send('Name and species are required');
    return;
  }
  next();
};

const updatePetHappiness = (req: Request, resp: Response, next: Function) => {
  if (!req.body.happiness) {
    resp.status(400).send('Happiness is required');
    return;
  }
  next();
};

const auth = (req: Request, resp: Response, next: Function) => {
  // authentication using bearer token
  if (req.headers.authorization !== 'Bearer password123') {
    resp.status(401).send('Unauthorized');
    return;
  }
  next();
};

export default {
  createPet,
  updatePetHappiness,
  auth,
};
