import { ApolloServer } from 'apollo-server-express';
import express, { json } from 'express';
import { createServer } from 'http';

const app = express();
app.use(express.json());

const port: number = 4000;

const httpServer = createServer(app);

httpServer.listen({ port }, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
