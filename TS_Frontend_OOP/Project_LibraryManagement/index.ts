import { Library } from './src/Library';
import { BookGenre } from './src/Types';

const library = new Library({ name: 'City Library', address: '123 Main St' });

library.addBook({
  title: '1984',
  author: 'George Orwell',
  publishedYear: 1949,
  genre: BookGenre.FICTION,
});
library.addBook({
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  publishedYear: 2011,
  genre: BookGenre.NON_FICTION,
});
library.addBook({
  title: 'The Doors of Perception',
  author: 'Aldous Huxley',
  publishedYear: 1954,
  genre: BookGenre.NON_FICTION,
});
library.addBook({
  title: 'Algorithms',
  author: 'Aditya Y. Bhargava',
  publishedYear: 0,
  genre: BookGenre.SCIENCE,
});

console.log(library.getBooks());

library.removeBook('Sapiens');

console.log(library.getBooks());


