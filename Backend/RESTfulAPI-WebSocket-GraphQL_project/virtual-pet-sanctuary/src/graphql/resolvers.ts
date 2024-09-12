import { subscribe } from 'diagnostics_channel';
import petModule from '../petData.js';
import { PetInput } from '../types.js';
import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

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
      const updatedPet = petModule.updatePetHappiness(+id, happiness);
      // the ws server send a message to all users subscribed to this
      pubsub.publish('PET_HAPPINESS_UPDATED', {
        petHappinessUpdated: updatedPet,
      });
      return updatedPet;
    },
    delete(_: any, { id }: { id: string }) {
      const deletedPet = petModule.deletePet(+id);
      pubsub.publish('PET_DELETED', { petDeleted: deletedPet });
      return deletedPet;
    },
  },

  Subscription: {
    petHappinessUpdated: {
      subscribe: () => pubsub.asyncIterator(['PET_HAPPINESS_UPDATED']), // the client has subscribed to this event
    },
    petDeleted: {
      subscribe: () => pubsub.asyncIterator(['PET_DELETED']),
    },
  },
};

export default resolvers;
