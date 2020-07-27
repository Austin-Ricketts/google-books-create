import axios from "axios";

export default {
  // Gets all books
  findBook: function(q) {
    console.log("get books api")
    return axios.get("/api/google", {params: { q: "title:" + q}});
  },
  // Gets the book with the given id
  getSavedBooks: function() {
    return axios.get("/api/books/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};