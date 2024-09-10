import petModule from '../petData.js'

// the resolver is an object that constains the functions
// act like controllers in graphql

const resolvers = {
  Query: {
    pets: () => petModule.getPets(),
    pet: (_: any, {id}: {id: number}) => petModule.getPet(+id),
  }
}

export default resolvers

