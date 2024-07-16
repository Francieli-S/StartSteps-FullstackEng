import { BookDetails, BookGenre } from "./Types";

export class Book {
  private _title: string
  private _author: string
  private _publishedYear: number
  private _genre : BookGenre 

  // improve properly default parameters
  constructor(book: BookDetails = {title: '', author: '', publishedYear: 2000, genre: BookGenre.SCIENCE}) { //how to set default parameters?
    this._title = book.title
    this._author = book.author
    this._publishedYear = book.publishedYear
    this._genre = book.genre
  }
  
  // code some validation to the setters
  get title(): string {
    return this._title
  }

  set title(title: string) {
    this._title = title
  }

  get author(): string {
    return this._author
  }

  set author(author: string) {
    this._author = author
  }

  get publishedYear(): number {
    return this._publishedYear
  }

  set publishedYear(publishedYear: number) {
    this._publishedYear = publishedYear
  }

  get genre(): string {
    return this._genre
  }

  set genre(genre: BookGenre) {
    this._genre = genre
  }

  getBookDetails = (): string => {
    const {title, author, publishedYear, genre} = this
     return (`Title: ${title}, Author: ${author}, Published Year: ${publishedYear}, Genre: ${genre}.`);
  } 
}

const bookOne: BookDetails = {
  title: 'Cat Kingdom',
  author: 'Franci',
  publishedYear: 2024,
  genre: BookGenre.SCIENCE
}

const bookOne1 = new Book(bookOne)
