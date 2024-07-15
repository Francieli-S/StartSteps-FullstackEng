// Is it because Library interface will not be imported from the other files that we creacre it inside the Library file?

import { Book } from './Book';
import { BookDetails, BookGenre } from './Types';

interface LibraryDetails {
  name: string;
  address: string;
}

export class Library {
  name: string;
  address: string;
  protected books: Book[];

  constructor(libray: LibraryDetails) {
    this.name = libray.name;
    this.address = libray.address;
    this.books = [];
  }

  addBook = (book: BookDetails): void => {
    const newBook = new Book(book);
    this.books.push(newBook);
  };

  removeBook = (title: string): void => {
    this.books = this.books.filter((book) => book.title !== title);
  };

  getBooks = (): Book[] => {
    return this.books;
  };
}
