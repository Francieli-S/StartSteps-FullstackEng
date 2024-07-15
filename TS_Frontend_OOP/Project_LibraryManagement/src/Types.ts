export enum BookGenre {
  FICTION = 'Fiction',
  NON_FICTION = 'Non-Fiction',
  SCIENCE = 'Science',
  BIOGRAPHY = 'Biograph',
}

export interface Book {
  title: string
  author: string
  publishedYear: number
  genre: BookGenre
}