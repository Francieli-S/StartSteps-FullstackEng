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
console.log(library.getBooks());
library.removeBook('Sapiens');
console.log(library.getBooks());
