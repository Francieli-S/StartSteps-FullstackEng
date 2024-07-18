import { BookDetails, BookGenre } from "./Types";

export class Book {
  protected _title: string
  protected _author: string
  protected _publishedYear: number
  protected _genre : BookGenre 

  // improve properly default parameters
  constructor(bookDetails: BookDetails = {title: '', author: '', publishedYear: 2000, genre: BookGenre.SCIENCE}) { //how to set default parameters?
    this._title = bookDetails.title
    this._author = bookDetails.author
    this._publishedYear = bookDetails.publishedYear
    this._genre = bookDetails.genre
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

  get genre(): BookGenre {
    return this._genre
  }

  set genre(genre: BookGenre) {
    this._genre = genre
  }
  // it returns Book { but with those _}!!
  getBookDetails(): BookDetails {
    return {
      title: this.title,
      author: this.author,
      publishedYear: this.publishedYear,
      genre: this.genre
    }
  } 
}

const bookOne: BookDetails = {
  title: 'Cat Kingdom',
  author: 'Franci',
  publishedYear: 2024,
  genre: BookGenre.SCIENCE
}

const bookOne1 = new Book(bookOne)
console.log(bookOne1);
