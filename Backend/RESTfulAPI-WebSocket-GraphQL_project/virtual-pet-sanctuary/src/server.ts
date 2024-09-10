import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createServer } from 'http';
import router from "./routes.js"
import typeDefs from './graphql/schema.js'
import resolvers from './graphql/resolvers.js'

const app = express();
app.use(express.json());
app.use('/api/pets', router);

const port: number = 4000;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

await apolloServer.start()
apolloServer.applyMiddleware({ app })

const httpServer = createServer(app);

httpServer.listen({ port }, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`RESTful API Server ready at http://localhost:${port}/api/pets`);
  console.log(`GraphQL server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
});
