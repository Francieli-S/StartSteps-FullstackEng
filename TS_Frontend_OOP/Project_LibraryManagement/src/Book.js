"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const Types_1 = require("./Types");
class Book {
    // improve properly default parameters
    constructor(bookDetails = { title: '', author: '', publishedYear: 2000, genre: Types_1.BookGenre.SCIENCE }) {
        this._title = bookDetails.title;
        this._author = bookDetails.author;
        this._publishedYear = bookDetails.publishedYear;
        this._genre = bookDetails.genre;
    }
    // code some validation to the setters
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get author() {
        return this._author;
    }
    set author(author) {
        this._author = author;
    }
    get publishedYear() {
        return this._publishedYear;
    }
    set publishedYear(publishedYear) {
        this._publishedYear = publishedYear;
    }
    get genre() {
        return this._genre;
    }
    set genre(genre) {
        this._genre = genre;
    }
    getBookDetails() {
        const { title, author, publishedYear, genre } = this;
        return (`Title: ${title}, Author: ${author}, Published Year: ${publishedYear}, Genre: ${genre}.`);
    }
}
exports.Book = Book;
const bookOne = {
    title: 'Cat Kingdom',
    author: 'Franci',
    publishedYear: 2024,
    genre: Types_1.BookGenre.SCIENCE
};
const bookOne1 = new Book(bookOne);
