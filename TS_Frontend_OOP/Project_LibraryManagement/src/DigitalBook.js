"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalBook = void 0;
const Book_1 = require("./Book");
const Types_1 = require("./Types");
class DigitalBook extends Book_1.Book {
    constructor(digitalBookDetail) {
        super(digitalBookDetail);
        this._format = digitalBookDetail.format;
        this._fileSize = digitalBookDetail.fileSize;
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
    // it returns a book and a digitalbook as objects
    // Override
    getBookDetails() {
        const bookDetails = super.getBookDetails();
        return Object.assign(Object.assign({}, bookDetails), { format: this._format, fileSize: this._fileSize });
    }
}
exports.DigitalBook = DigitalBook;
const digitalBookOne = {
    title: 'Cat Kingdom',
    author: 'Franci',
    publishedYear: 2024,
    genre: Types_1.BookGenre.SCIENCE,
    format: Types_1.DigitalBookFormat.PDF,
    fileSize: 2
};
const newDigBook = new DigitalBook(digitalBookOne);
console.log(newDigBook.getBookDetails());
