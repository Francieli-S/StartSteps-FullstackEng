"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const Types_1 = require("./Types");
class Book {
    constructor(book = { title: '', author: '', publishedYear: 2000, genre: Types_1.BookGenre.SCIENCE }) {
        this.getBookDetails = () => {
            const { title, author, publishedYear, genre } = this;
            return (`Title: ${title}, Author: ${author}, Published Year: ${publishedYear}, Genre: ${genre}.`);
        };
        this._title = book.title;
        this._author = book.author;
        this._publishedYear = book.publishedYear;
        this._genre = book.genre;
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
}
exports.Book = Book;
// I'm not sure if this is the right way to do it. It seems I am repeating
// If it is right, how to name this object and the instance?
const bookOne = {
    title: 'Cat Kingdom',
    author: 'Franci',
    publishedYear: 2024,
    genre: Types_1.BookGenre.SCIENCE
};
// const bookTwo: BookDetails = {
//   title: '',
//   author: '',
//   publishedYear: ,
//   genre: BookGenre.BIOGRAPHY
// }
const bookOne1 = new Book(bookOne);
// const bookTwo2 = new Book(bookTwo)
bookOne1.getBookDetails();
// console.log(bookTwo2);
console.log(bookOne1.getBookDetails());
