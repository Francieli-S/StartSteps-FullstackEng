"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioBook = void 0;
const DigitalBook_1 = require("./DigitalBook");
const Types_1 = require("./Types");
class AudioBook extends DigitalBook_1.DigitalBook {
    constructor(book, format, fileSize, duration, narrator) {
        super(book, format, fileSize);
        this._duration = duration;
        this._narrator = narrator;
    }
    get duration() {
        return this._duration;
    }
    set duration(duration) {
        this._duration = duration;
    }
    get narrator() {
        return this._narrator;
    }
    set narrator(narrator) {
        this._narrator = narrator;
    }
    getBookDetails() {
        super.getBookDetails();
        const { title, author, publishedYear, genre, format, fileSize, duration, narrator } = this;
        return (`Title: ${title}, Author: ${author}, Published Year: ${publishedYear}, Genre: ${genre}, Format: ${format}, File Size: ${fileSize}MB, Duration: ${duration}min, Narrator: ${narrator}.`);
    }
}
exports.AudioBook = AudioBook;
const audioBookOne = {
    title: 'Cat Kingdom',
    author: 'Franci',
    publishedYear: 2024,
    genre: Types_1.BookGenre.SCIENCE,
};
const newAudioBook = new AudioBook(audioBookOne, Types_1.DigitalBookFormat.MOBI, 2, 90, 'Foxy');
console.log(newAudioBook);
console.log(newAudioBook.getBookDetails());
