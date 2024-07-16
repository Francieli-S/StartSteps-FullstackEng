"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalBook = void 0;
const Book_1 = require("./Book");
const Types_1 = require("./Types");
class DigitalBook extends Book_1.Book {
    // constructor(digitalBook: DigitalBookDetails) {
    constructor(book, format, fileSize) {
        super(book);
        this._format = format;
        this._fileSize = fileSize;
    }
    get format() {
        return this._format;
    }
    set format(format) {
        this._format = format;
    }
    get fileSize() {
        return this._fileSize;
    }
    set fileSize(fileSize) {
        this._fileSize = fileSize;
    }
    getBookDetails() {
        super.getBookDetails();
        const { title, author, publishedYear, genre, format, fileSize } = this;
        return (`Title: ${title}, Author: ${author}, Published Year: ${publishedYear}, Genre: ${genre}, Format: ${format}, File Size: ${fileSize}`);
    }
}
exports.DigitalBook = DigitalBook;
const digitalBookOne = {
    title: 'Cat Kingdom',
    author: 'Franci',
    publishedYear: 2024,
    genre: Types_1.BookGenre.SCIENCE,
    // format: DigitalBookFormat.PDF,
    // fileSize: 2
};
const newDigBook = new DigitalBook(digitalBookOne, Types_1.DigitalBookFormat.PDF, 2);
console.log(newDigBook);
