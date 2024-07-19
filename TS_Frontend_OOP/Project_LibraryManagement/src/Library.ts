// Is it because Library interface will not be imported from the other files that we creacre it inside the Library file?

import { AudioBook } from './AudioBook';
import { Book } from './Book';
import { DigitalBook } from './DigitalBook';
import { AnyBookProps, BookDetails, LibraryDetails } from './Types';

export class Library {
  private name: string;
  private address: string;
  private books: Book[];

  constructor(librayDetails: LibraryDetails) {
    this.name = librayDetails.name;
    this.address = librayDetails.address;
    this.books = [];
  }

  addBook(book: Book): void;
  addBook(book: DigitalBook): void;
  addBook(book: AudioBook): void;
  addBook(book: any): void {
    let newBook = book;
    if ('narrator' in book) {
      newBook = new AudioBook(book);
      
    } else if ('format' in book) {
      newBook = new DigitalBook(book);
      
    } else {
      newBook = new Book(book);
    }
    this.books.push(book);
  }

  // addBook = (bookDetails: BookDetails | DigitalBookDetails | AudioBookDetails) => {
  //   const newBook = new Book (bookDetails)
  //   this.books.push(newBook)
  // }
  // private isDigitalBook(
  //   typeOfBook: AnyBookProps
  // ): typeOfBook is DigitalBookDetails {
  //   return (typeOfBook as DigitalBookDetails).fileSize !== undefined;
  // }
  // private isAudioBook(
  //   typeOfBook: AnyBookProps
  // ): typeOfBook is AudioBookDetails {
  //   return (typeOfBook as AudioBookDetails).narrator !== '';
  // }
  // addBook = (typeOfBook: AnyBookProps): void => {
  //   let newBook;
  //   if (this.isDigitalBook(typeOfBook)) {
  //     newBook = new DigitalBook(typeOfBook);
  //   } else if (this.isAudioBook(typeOfBook)) {
  //     newBook = new AudioBook(typeOfBook);
  //   } else {
  //     newBook = new Book(typeOfBook);
  //   }
  //   this.books.push(newBook);
  // };

  removeBook = (title: string): void => {
    this.books = this.books.filter((book) => book.title !== title);
  };

  getBooks = (): BookDetails[] => {
    return this.books.map((book) => book.getBookDetails());
  };

  getBookDescription = (): string[] => {
    return this.books.map((book) => JSON.stringify(book.getBookDetails()));
  };
}
