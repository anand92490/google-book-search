import axios from "axios";

export default {
  // Get the book from the google Books api
  getGoogleSearchBooks: function(query){
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  },

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  //Deletes the book with given id
  DeleteBooks: function(id) {
    return axios.delete("/api/books" + id)
  },
  //Saves a book to the database
  saveBook: function(bookData){
      return axios.post("api/books", bookData)
  }
};