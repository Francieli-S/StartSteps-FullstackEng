"use strict";
// Is it because Library interface will not be imported from the other files that we creacre it inside the Library file?
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const Book_1 = require("./Book");
class Library {
    constructor(libray) {
        this.addBook = (book) => {
            const newBook = new Book_1.Book(book);
            this.books.push(newBook);
        };
        this.removeBook = (title) => {
            this.books = this.books.filter((book) => book.title !== title);
        };
        this.getBooks = () => {
            return this.books.map(book => book.getBookDetails());
        };
        this.name = libray.name;
        this.address = libray.address;
        this.books = [];
    }
}
exports.Library = Library;
