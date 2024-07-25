import { Book } from "./Book";
import { DigitalBookFormat, BookGenre } from "./Types";
export class DigitalBook extends Book {
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
const digitalBookOne = {
    title: 'Cat Kingdom',
    author: 'Franci',
    publishedYear: 2024,
    genre: BookGenre.SCIENCE,
    format: DigitalBookFormat.PDF,
    fileSize: 2
};
const newDigBook = new DigitalBook(digitalBookOne);
console.log(newDigBook.getBookDetails());
