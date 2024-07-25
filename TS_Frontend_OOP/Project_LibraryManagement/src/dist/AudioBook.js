import { DigitalBook } from "./DigitalBook";
import { DigitalBookFormat, BookGenre } from "./Types";
export class AudioBook extends DigitalBook {
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
const audioBookOne = {
    title: 'Cat Kingdom',
    author: 'Franci',
    publishedYear: 2024,
    genre: BookGenre.SCIENCE,
    format: DigitalBookFormat.MOBI,
    fileSize: 2,
    duration: 90,
    narrator: 'Foxy'
};
const newAudioBook = new AudioBook(audioBookOne);
console.log(newAudioBook.getBookDetails());
