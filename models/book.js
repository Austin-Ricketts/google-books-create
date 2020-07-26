const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true, trim: true },
  infoLink: { type: String, lowercase: true},
  authors: { type: Array, required: true },
  description: { type: String},
  imageLinks: {type: String, lowercase: true},
  thumbnail: {type: String, lowercase: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
