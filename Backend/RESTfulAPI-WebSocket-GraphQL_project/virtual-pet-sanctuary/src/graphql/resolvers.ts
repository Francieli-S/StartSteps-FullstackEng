import petModule from '../petData.js';
import { PetInput } from '../types.js';

// the resolver is an object that constains the functions
// acts like controllers in graphql

const resolvers = {
  Query: {
    pets: () => petModule.getPets(),
    pet: (_: any, { id }: { id: number }) => petModule.getPet(+id),
  },

  Mutation: {
    createPet: (_: any, { pet }: { pet: PetInput }) => {
      return petModule.createPet(pet);
    },
    updatePetHappiness(
      _: any,
      { id, happiness }: { id: string; happiness: number }
    ) {
      return petModule.updatePetHappiness(+id, happiness);
    },
    delete(_: any, { id }: { id: string }) {
      return petModule.deletePet(+id);
    },
  },
};

export default resolvers;
