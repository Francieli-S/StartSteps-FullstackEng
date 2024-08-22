import { port } from './config.js';
import express, { Request, Response, NextFunction } from 'express';
// I cannot import from .ts since all of the TS in Node is compiled to JS.
import { consoleMessage } from './helper.js';
import { logServerMessage } from './logger.js';
import router from './routers.js';

// create a Node server using express
const app = express();

// middleware provided by express to parse JSON requests
app.use(express.json());
app.use(router)

// Start the server
app.listen(port, () => {
  console.log(consoleMessage);
  logServerMessage('This server is logging at: ');
});
