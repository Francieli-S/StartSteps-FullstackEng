"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AudioBook_1 = require("./src/AudioBook");
const Book_1 = require("./src/Book");
const DigitalBook_1 = require("./src/DigitalBook");
const Library_1 = require("./src/Library");
const Types_1 = require("./src/Types");
const library = new Library_1.Library({ name: 'City Library', address: '123 Main St' });
// library.addBook({
//   title: '1984',
//   author: 'George Orwell',
//   publishedYear: 1949,
//   genre: BookGenre.FICTION,
// });
// library.addBook({
//   title: 'Sapiens',
//   author: 'Yuval Noah Harari',
//   publishedYear: 2011,
//   genre: BookGenre.NON_FICTION,
// });
// library.addBook({
//   title: 'The Doors of Perception',
//   author: 'Aldous Huxley',
//   publishedYear: 1954,
//   genre: BookGenre.NON_FICTION,
// });
// library.addBook({
//   title: 'Algorithms',
//   author: 'Aditya Y. Bhargava',
//   publishedYear: 0,
//   genre: BookGenre.SCIENCE,
// });
// library.addBook({
//   title: 'Some digital book',
//   author: 'Aditya Y. Bhargava',
//   publishedYear: 0,
//   genre: BookGenre.SCIENCE,
//   format: DigitalBookFormat.PDF,
//   fileSize: 5
// });
// library.addBook({
//   title: 'Some audio book',
//   author: 'Aditya Y. Bhargava',
//   publishedYear: 0,
//   genre: BookGenre.SCIENCE,
//   format: DigitalBookFormat.AUDIO,
//   fileSize: 3,
//   duration: 84,
//   narrator: 'Gato'
// });
const book = new Book_1.Book({
    title: 'book',
    author: 'Aditya Y. Bhargava',
    publishedYear: 0,
    genre: Types_1.BookGenre.SCIENCE,
});
const digitalBook = new DigitalBook_1.DigitalBook({
    title: 'digital book',
    author: 'Aditya Y. Bhargava',
    publishedYear: 0,
    genre: Types_1.BookGenre.SCIENCE,
    format: Types_1.DigitalBookFormat.PDF,
    fileSize: 5,
});
const audioBook = new AudioBook_1.AudioBook({
    title: 'audio book',
    author: 'Aditya Y. Bhargava',
    publishedYear: 0,
    genre: Types_1.BookGenre.SCIENCE,
    format: Types_1.DigitalBookFormat.PDF,
    fileSize: 5,
    duration: 84,
    narrator: 'Gato',
});
library.addBook(book);
library.addBook(digitalBook);
library.addBook(audioBook);
console.log('Library array: ', library.getBooks());
console.log('Book description: ', library.getBookDescription());
// booksLibrary.removeBook('Sapiens');
// console.log(booksLibrary.getBooks());
