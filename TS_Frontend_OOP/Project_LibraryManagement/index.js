"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Library_1 = require("./src/Library");
const Types_1 = require("./src/Types");
const library = new Library_1.Library({ name: 'City Library', address: '123 Main St' });
library.addBook({
    title: '1984',
    author: 'George Orwell',
    publishedYear: 1949,
    genre: Types_1.BookGenre.FICTION,
});
library.addBook({
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    publishedYear: 2011,
    genre: Types_1.BookGenre.NON_FICTION,
});
library.addBook({
    title: 'The Doors of Perception',
    author: 'Aldous Huxley',
    publishedYear: 1954,
    genre: Types_1.BookGenre.NON_FICTION,
});
library.addBook({
    title: 'Algorithms',
    author: 'Aditya Y. Bhargava',
    publishedYear: 0,
    genre: Types_1.BookGenre.SCIENCE,
});
library.addBook({
    title: 'Some digital book',
    author: 'Aditya Y. Bhargava',
    publishedYear: 0,
    genre: Types_1.BookGenre.SCIENCE,
    format: Types_1.DigitalBookFormat.PDF,
    fileSize: 5
});
library.addBook({
    title: 'Some audio book',
    author: 'Aditya Y. Bhargava',
    publishedYear: 0,
    genre: Types_1.BookGenre.SCIENCE,
    format: Types_1.DigitalBookFormat.AUDIO,
    fileSize: 3,
    duration: 84,
    narrator: 'Gato'
});
console.log('Library: ', library.books);
// console.log('Library array: ', library.getBooks());
// console.log('Book description: ', library.getBookDescription());
// booksLibrary.removeBook('Sapiens');
// console.log(booksLibrary.getBooks());
