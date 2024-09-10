import petModule from '../petData.js'

// the resolver is an object that constains the functions
// act like controllers in graphql

const resolvers = {
  Query: {
    pets: () => petModule.getPets()
  }
}

export default resolvers

