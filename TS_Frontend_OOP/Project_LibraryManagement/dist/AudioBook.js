"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioBook = void 0;
const DigitalBook_1 = require("./DigitalBook");
const Types_1 = require("./Types");
class AudioBook extends DigitalBook_1.DigitalBook {
    constructor(audioBookDetails) {
        super(audioBookDetails);
        this._duration = audioBookDetails.duration;
        this._narrator = audioBookDetails.narrator;
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
    // it returns a digital and an audiobook as objects
    // Override
    getBookDetails() {
        const bookDetails = super.getBookDetails();
        return Object.assign(Object.assign({}, bookDetails), { duration: this._duration, narrator: this._narrator });
    }
}
exports.AudioBook = AudioBook;
const audioBookOne = {
    title: 'Cat Kingdom',
    author: 'Franci',
    publishedYear: 2024,
    genre: Types_1.BookGenre.SCIENCE,
    format: Types_1.DigitalBookFormat.MOBI,
    fileSize: 2,
    duration: 90,
    narrator: 'Foxy'
};
const newAudioBook = new AudioBook(audioBookOne);
console.log(newAudioBook.getBookDetails());
