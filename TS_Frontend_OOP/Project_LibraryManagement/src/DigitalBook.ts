import { Book } from "./Book";
import { BookDetails, DigitalBookFormat, BookGenre } from "./Types";

export class DigitalBook extends Book {
  // maybe change from private to protected later
  private _format: DigitalBookFormat
  private _fileSize: number // MB

  // constructor(digitalBook: DigitalBookDetails) {
  constructor(book: BookDetails, format: DigitalBookFormat, fileSize: number) {
    super(book);
    this._format = format;
    this._fileSize = fileSize;
  }

  get format(): string {
    return this._format 
  }

  set format(format: DigitalBookFormat) {
    this._format = format
  }

  get fileSize(): number {
    return this._fileSize
  }

  set fileSize(fileSize: number) {
    this._fileSize = fileSize
  }

  getBookDetails() {
    super.getBookDetails()
    const {title, author, publishedYear, genre, format, fileSize} = this
    return (`Title: ${title}, Author: ${author}, Published Year: ${publishedYear}, Genre: ${genre}, Format: ${format}, File Size: ${fileSize}`);
  }
}

const digitalBookOne: BookDetails = {
  title: 'Cat Kingdom',
  author: 'Franci',
  publishedYear: 2024,
  genre: BookGenre.SCIENCE,
  // format: DigitalBookFormat.PDF,
  // fileSize: 2
}

const newDigBook = new DigitalBook(digitalBookOne, DigitalBookFormat.MOBI, 2)
console.log(newDigBook);
console.log(newDigBook.getBookDetails());