"use strict";
// Is it because Library interface will not be imported from the other files that we creacre it inside the Library file?
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const AudioBook_1 = require("./AudioBook");
const Book_1 = require("./Book");
const DigitalBook_1 = require("./DigitalBook");
class Library {
    constructor(libray) {
        this.addBook = (typeOfBook) => {
            let newBook;
            if (this.isDigitalBook(typeOfBook)) {
                newBook = new DigitalBook_1.DigitalBook(typeOfBook);
            }
            else if (this.isAudioBook(typeOfBook)) {
                newBook = new AudioBook_1.AudioBook(typeOfBook);
            }
            else {
                newBook = new Book_1.Book(typeOfBook);
            }
            this.books.push(newBook);
        };
        this.removeBook = (title) => {
            this.books = this.books.filter((book) => book.title !== title);
        };
        this.getBooks = () => {
            return this.books.map((book) => book.getBookDetails());
        };
        this.name = libray.name;
        this.address = libray.address;
        this.books = [];
    }
    isDigitalBook(typeOfBook) {
        return typeOfBook.fileSize !== undefined;
    }
    isAudioBook(typeOfBook) {
        return typeOfBook.narrator !== '';
    }
}
exports.Library = Library;
