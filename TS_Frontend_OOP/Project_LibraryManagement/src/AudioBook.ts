import { DigitalBook } from "./DigitalBook";
import { DigitalBookFormat, BookGenre, AudioBookDetails } from "./Types";

export class AudioBook extends DigitalBook {
  private _duration: number // min
  private _narrator: string

  constructor(audioBookDetails: AudioBookDetails) {
    super(audioBookDetails)
    this._duration = audioBookDetails.duration
    this._narrator = audioBookDetails.narrator
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

  getBookDetails(): AudioBookDetails {
    const digitalBookDetails = super.getBookDetails()
    return {...digitalBookDetails, duration: this._duration , narrator: this._narrator}
    // const {title, author, publishedYear, genre, format, fileSize, duration, narrator} = this
    // return (`Title: ${title}, Author: ${author}, Published Year: ${publishedYear}, Genre: ${genre}, Format: ${format}, File Size: ${fileSize}MB, Duration: ${duration}min, Narrator: ${narrator}.`);
  }
}

const audioBookOne: AudioBookDetails = {
  title: 'Cat Kingdom',
  author: 'Franci',
  publishedYear: 2024,
  genre: BookGenre.SCIENCE,
  format: DigitalBookFormat.MOBI,
  fileSize: 2,
  duration: 90,
  narrator: 'Foxy'
}

const newAudioBook = new AudioBook(audioBookOne)
console.log(newAudioBook.getBookDetails());