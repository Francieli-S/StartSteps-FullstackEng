import { DigitalBook } from "./DigitalBook";
import { BookDetails, DigitalBookFormat, BookGenre } from "./Types";

export class AudioBook extends DigitalBook {
  private _duration: number // min
  private _narrator: string

  constructor(book: BookDetails, format: DigitalBookFormat, fileSize: number, duration: number, narrator: string) {
    super(book, format, fileSize)
    this._duration = duration
    this._narrator = narrator
  }

  get duration(): number {
    return this._duration 
  }

  set duration(duration: number) {
    this._duration = duration
  }

  get narrator(): string {
    return this._narrator
  }

  set narrator(narrator: string) {
    this._narrator = narrator
  }

  getBookDetails() {
    super.getBookDetails()
    const {title, author, publishedYear, genre, format, fileSize, duration, narrator} = this
    return (`Title: ${title}, Author: ${author}, Published Year: ${publishedYear}, Genre: ${genre}, Format: ${format}, File Size: ${fileSize}MB, Duration: ${duration}min, Narrator: ${narrator}.`);
  }
}

const audioBookOne: BookDetails = {
  title: 'Cat Kingdom',
  author: 'Franci',
  publishedYear: 2024,
  genre: BookGenre.SCIENCE,
}

const newAudioBook = new AudioBook(audioBookOne, DigitalBookFormat.MOBI, 2, 90, 'Foxy')
console.log(newAudioBook);
console.log(newAudioBook.getBookDetails());