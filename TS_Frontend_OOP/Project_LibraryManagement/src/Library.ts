import { AudioBook } from './AudioBook';
import { Book } from './Book';
import { DigitalBook } from './DigitalBook';
import {
  AnyBookProps,
  AudioBookDetails,
  BookDetails,
  DigitalBookDetails,
  LibraryDetails,
} from './Types';

export class Library {
  private name: string;
  private address: string;
  private books: Book[];

  constructor(librayDetails: LibraryDetails) {
    this.name = librayDetails.name;
    this.address = librayDetails.address;
    this.books = [];
  }
  //function signatures:
  addBook(book: Book): void;
  addBook(book: BookDetails): void;
  addBook(book: DigitalBookDetails): void;
  addBook(book: AudioBookDetails): void;
  addBook(book: Book | AnyBookProps): void {
    let newBook = book;
    if ('narrator' in book) {
      newBook = new AudioBook(book);
    } else if ('format' in book) {
      newBook = new DigitalBook(book);
    } else {
      newBook = new Book(book);
    }
    this.books.push(newBook);
  }

  removeBook = (title: string): void => {
    this.books = this.books.filter((book) => book.title !== title);
  };

  getBooks = (): BookDetails[] => {
    return this.books.map((book) => book.getBookDetails());
  };

  getBookDescription = (): string[] => {
    return this.books.map((book) => JSON.stringify(book.getBookDetails()));
  };

  displayLibrary = (): void => {
    console.log(this.books);
    const booksDisplay = document.getElementById(
      'book-list'
    ) as HTMLUListElement;
    
    const booksList = this.books.map((book) => {
      const bookElement = document.createElement('li');
      bookElement.className = 'book';
      bookElement.textContent = `${book.title}`;
      booksDisplay.appendChild(bookElement);
    });
  };
}
