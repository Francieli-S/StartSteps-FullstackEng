import { BookDetails, BookGenre } from "./Types";

class Book {
  private _title: string
  private _author: string
  private _publishedYear: number
  private _genre : BookGenre 

  constructor(book: BookDetails) {
    this._title = book.title
    this._author = book.author
    this._publishedYear = book.publishedYear
    this._genre = book.genre
  }

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

}