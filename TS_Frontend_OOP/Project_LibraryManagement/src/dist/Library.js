// Is it because Library interface will not be imported from the other files that we creacre it inside the Library file?
import { AudioBook } from './AudioBook';
import { Book } from './Book';
import { DigitalBook } from './DigitalBook';
export class Library {
    constructor(librayDetails) {
        this.removeBook = (title) => {
            this.books = this.books.filter((book) => book.title !== title);
        };
        this.getBooks = () => {
            return this.books.map((book) => book.getBookDetails());
        };
        this.getBookDescription = () => {
            return this.books.map((book) => JSON.stringify(book.getBookDetails()));
        };
        this.displayLibrary = () => {
            console.log(this.books);
            const booksDisplay = document.getElementById('book-list');
            const booksList = this.books.map((book) => {
                const bookElement = document.createElement('li');
                bookElement.className = 'book';
                bookElement.textContent = `${book.title}`;
                booksDisplay.appendChild(bookElement);
            });
        };
        this.name = librayDetails.name;
        this.address = librayDetails.address;
        this.books = [];
    }
    addBook(book) {
        let newBook = book;
        if ('narrator' in book) {
            newBook = new AudioBook(book);
        }
        else if ('format' in book) {
            newBook = new DigitalBook(book);
        }
        else {
            newBook = new Book(book);
        }
        this.books.push(newBook);
    }
}
