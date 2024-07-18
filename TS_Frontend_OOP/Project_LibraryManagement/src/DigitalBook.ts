import { Book } from "./Book";
import { DigitalBookFormat, DigitalBookDetails, BookGenre } from "./Types";

export class DigitalBook extends Book {
  private _format: DigitalBookFormat
  private _fileSize: number // MB

  constructor(digitalBookDetail: DigitalBookDetails) {
    super(digitalBookDetail);
    this._format = digitalBookDetail.format;
    this._fileSize = digitalBookDetail.fileSize;
  }

  get format(): DigitalBookFormat {
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
  
  // it returns a book and a digitalbook as objects
  // Override
  getBookDetails(): DigitalBookDetails {
    const bookDetails = super.getBookDetails()
    return {...bookDetails, format: this._format , fileSize: this._fileSize}
  }
}

const digitalBookOne: DigitalBookDetails = {
  title: 'Cat Kingdom',
  author: 'Franci',
  publishedYear: 2024,
  genre: BookGenre.SCIENCE,
  format: DigitalBookFormat.PDF,
  fileSize: 2
}

const newDigBook = new DigitalBook(digitalBookOne)
console.log(newDigBook.getBookDetails());