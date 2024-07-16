"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalBookFormat = exports.BookGenre = void 0;
var BookGenre;
(function (BookGenre) {
    BookGenre["FICTION"] = "Fiction";
    BookGenre["NON_FICTION"] = "Non-Fiction";
    BookGenre["SCIENCE"] = "Science";
    BookGenre["BIOGRAPHY"] = "Biograph";
})(BookGenre || (exports.BookGenre = BookGenre = {}));
var DigitalBookFormat;
(function (DigitalBookFormat) {
    DigitalBookFormat["PDF"] = "pdf";
    DigitalBookFormat["EPUB"] = "epub";
    DigitalBookFormat["MOBI"] = "mobi";
    DigitalBookFormat["AUDIO"] = "audio";
})(DigitalBookFormat || (exports.DigitalBookFormat = DigitalBookFormat = {}));
// export interface DigitalBookDetails extends BookDetails {
//   format: DigitalBookFormat
//   fileSize: number
// }
