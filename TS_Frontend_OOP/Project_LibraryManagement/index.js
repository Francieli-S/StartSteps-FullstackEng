"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Library_1 = require("./src/Library");
const Types_1 = require("./src/Types");
const booksLibrary = new Library_1.Library({ name: 'Books - Library', address: '123 Main St' });
booksLibrary.addBook({
    title: '1984',
    author: 'George Orwell',
    publishedYear: 1949,
    genre: Types_1.BookGenre.FICTION,
});
booksLibrary.addBook({
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    publishedYear: 2011,
    genre: Types_1.BookGenre.NON_FICTION,
});
booksLibrary.addBook({
    title: 'The Doors of Perception',
    author: 'Aldous Huxley',
    publishedYear: 1954,
    genre: Types_1.BookGenre.NON_FICTION,
});
booksLibrary.addBook({
    title: 'Algorithms',
    author: 'Aditya Y. Bhargava',
    publishedYear: 0,
    genre: Types_1.BookGenre.SCIENCE,
});
console.log(booksLibrary.getBooks());
// booksLibrary.removeBook('Sapiens');
// console.log(booksLibrary.getBooks());
const digitalBooksLibrary = new Library_1.Library({ name: 'Digital Books - Library', address: '123 Main St' });
digitalBooksLibrary.addBook({
    title: '1984',
    author: 'George Orwell',
    publishedYear: 1949,
    genre: Types_1.BookGenre.FICTION,
});
digitalBooksLibrary.addBook({
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    publishedYear: 2011,
    genre: Types_1.BookGenre.NON_FICTION,
});
const audioBooksLibrary = new Library_1.Library({ name: 'Audio Books - Library', address: '123 Main St' });
