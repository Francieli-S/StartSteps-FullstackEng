import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Pet {
    id: ID!
    name: String!
    species: String
    happiness: Int
    color: String
    size: String
  }

  type Query {
    pets: [Pet!]!
    pet(id: ID!): Pet
  }

  # type Mutation {
  #   createPet(name: String!, species: String!): Pet
  #   updatePetHappiness((id: ID!, happiness: Int!)): Pet
  #   delete(id: ID!): Pet
  # }
`;

export default typeDefs;
