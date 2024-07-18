import { Book } from "./Book";
import { BookDetails, DigitalBookFormat, DigitalBookDetails, BookGenre } from "./Types";

export class DigitalBook extends Book {
  // maybe change from private to protected later
  private _format: DigitalBookFormat
  private _fileSize: number // MB

  constructor(digitalBookDetail: DigitalBookDetails) {
    super(digitalBookDetail);
    this._format = digitalBookDetail.format;
    this._fileSize = digitalBookDetail.fileSize;
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
  
  getBookDetails(): DigitalBookDetails {
    const bookDetails = super.getBookDetails()
    return {...bookDetails, format: this._format , fileSize: this._fileSize}
    // const {title, author, publishedYear, genre, format, fileSize} = this
    // return (`Title: ${title}, Author: ${author}, Published Year: ${publishedYear}, Genre: ${genre}, Format: ${format}, File Size: ${fileSize}MB`);
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