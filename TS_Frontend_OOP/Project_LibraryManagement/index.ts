import { Library } from './src/Library';
import { BookGenre, DigitalBookFormat } from './src/Types';

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
library.addBook({
  title: 'Some digital book',
  author: 'Aditya Y. Bhargava',
  publishedYear: 0,
  genre: BookGenre.SCIENCE,
  format: DigitalBookFormat.PDF,
  fileSize: 5
});
library.addBook({
  title: 'Some audio book',
  author: 'Aditya Y. Bhargava',
  publishedYear: 0,
  genre: BookGenre.SCIENCE,
  format: DigitalBookFormat.AUDIO,
  fileSize: 3,
  duration: 84,
  narrator: 'Gato'
});


console.log(library.getBooks());
// booksLibrary.removeBook('Sapiens');
// console.log(booksLibrary.getBooks());





