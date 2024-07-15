import { BookDetails, BookGenre } from "./Types";

export class Book {
  private _title: string
  private _author: string
  private _publishedYear: number
  private _genre : BookGenre 

  constructor(book: BookDetails) { //how to set default parameters?
    this._title = book.title
    this._author = book.author
    this._publishedYear = book.publishedYear
    this._genre = book.genre
  }
  
  // code some validation to the getters
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

  // Is it okay to use arrow function here but not with the getters and setters?
  getBookDetails = (): void => {
    const {title, author, publishedYear, genre} = this
    console.log(`Title: ${title}, Author: ${author}, Published Year: ${publishedYear}, Genre: ${genre}.`);
  } 
}

// I'm not sure if this is the right way to do it. It seems I am repeating
// If it is right, how to name this object and the instance?
const bookOne: BookDetails = {
  title: 'Cat Kingdom',
  author: 'Franci',
  publishedYear: 2024,
  genre: BookGenre.SCIENCE
}

const bookOne1 = new Book(bookOne)

bookOne1.getBookDetails();
