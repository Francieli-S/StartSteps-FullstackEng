export enum BookGenre {
  FICTION = 'Fiction',
  NON_FICTION = 'Non-Fiction',
  SCIENCE = 'Science',
  BIOGRAPHY = 'Biograph',
}

export interface BookDetails {
  title: string
  author: string
  publishedYear: number
  genre: BookGenre
}

export interface LibraryDetails {
  name: string;
  address: string;
}

export enum DigitalBookFormat {
  PDF = 'pdf',
  EPUB = 'epub',
  MOBI = 'mobi',
  AUDIO = 'audio',
}

export interface DigitalBookDetails extends BookDetails {
  format: DigitalBookFormat
  fileSize: number
}

export interface AudioBookDetails extends DigitalBookDetails {
  duration: number
  narrator: string
}

export type AnyBookProps = BookDetails | DigitalBookDetails | AudioBookDetails
