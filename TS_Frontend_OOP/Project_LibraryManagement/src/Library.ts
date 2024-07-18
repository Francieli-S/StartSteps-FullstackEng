// Is it because Library interface will not be imported from the other files that we creacre it inside the Library file?

import { AudioBook } from './AudioBook';
import { Book } from './Book';
import { DigitalBook } from './DigitalBook';
import {
  AnyBookProps,
  AudioBookDetails,
  BookDetails,
  DigitalBookDetails,
  DigitalBookFormat,
  LibraryDetails,
} from './Types';

export class Library {
  name: string;
  address: string;
  protected books: Book[];

  constructor(libray: LibraryDetails) {
    this.name = libray.name;
    this.address = libray.address;
    this.books = [];
  }

  private isDigitalBook(
    typeOfBook: AnyBookProps
  ): typeOfBook is DigitalBookDetails {
    return (typeOfBook as DigitalBookDetails).fileSize !== undefined;
  }

  private isAudioBook(
    typeOfBook: AnyBookProps
  ): typeOfBook is AudioBookDetails {
    return (typeOfBook as AudioBookDetails).narrator !== '';
  }

  addBook = (typeOfBook: AnyBookProps): void => {
    let newBook;

    if (this.isDigitalBook(typeOfBook)) {
      newBook = new DigitalBook(typeOfBook);
    } else if (this.isAudioBook(typeOfBook)) {
      newBook = new AudioBook(typeOfBook);
    } else {
      newBook = new Book(typeOfBook);
    }

    this.books.push(newBook);
  };

  removeBook = (title: string): void => {
    this.books = this.books.filter((book) => book.title !== title);
  };

  getBooks = () => {
    return this.books.map((book) => book.getBookDetails());
  };
}
