"use strict";
// Is it because Library interface will not be imported from the other files that we creacre it inside the Library file?
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const AudioBook_1 = require("./AudioBook");
const Book_1 = require("./Book");
const DigitalBook_1 = require("./DigitalBook");
class Library {
    constructor(librayDetails) {
        // addBook = (bookDetails: BookDetails | DigitalBookDetails | AudioBookDetails) => {
        //   const newBook = new Book (bookDetails)
        //   this.books.push(newBook)
        // }
        // private isDigitalBook(
        //   typeOfBook: AnyBookProps
        // ): typeOfBook is DigitalBookDetails {
        //   return (typeOfBook as DigitalBookDetails).fileSize !== undefined;
        // }
        // private isAudioBook(
        //   typeOfBook: AnyBookProps
        // ): typeOfBook is AudioBookDetails {
        //   return (typeOfBook as AudioBookDetails).narrator !== '';
        // }
        // addBook = (typeOfBook: AnyBookProps): void => {
        //   let newBook;
        //   if (this.isDigitalBook(typeOfBook)) {
        //     newBook = new DigitalBook(typeOfBook);
        //   } else if (this.isAudioBook(typeOfBook)) {
        //     newBook = new AudioBook(typeOfBook);
        //   } else {
        //     newBook = new Book(typeOfBook);
        //   }
        //   this.books.push(newBook);
        // };
        this.removeBook = (title) => {
            this.books = this.books.filter((book) => book.title !== title);
        };
        this.getBooks = () => {
            return this.books.map((book) => book.getBookDetails());
        };
        this.getBookDescription = () => {
            return this.books.map((book) => JSON.stringify(book.getBookDetails()));
        };
        this.name = librayDetails.name;
        this.address = librayDetails.address;
        this.books = [];
    }
    addBook(book) {
        let newBook = book;
        if ('narrator' in book) {
            newBook = new AudioBook_1.AudioBook(book);
        }
        else if ('format' in book) {
            newBook = new DigitalBook_1.DigitalBook(book);
        }
        else {
            newBook = new Book_1.Book(book);
        }
        this.books.push(book);
    }
}
exports.Library = Library;
