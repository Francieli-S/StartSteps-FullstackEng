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
  // it returns a digital and an audiobook as objects
  // Override
  getBookDetails(): AudioBookDetails {
    const bookDetails = super.getBookDetails()
    return {...bookDetails, duration: this._duration , narrator: this._narrator}
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