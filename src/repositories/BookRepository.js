const Book = require("../models/Book");

class BookRepository {
  constructor() {
    this.books = [
      new Book(1, "Start with Why", "Simon Sinek", 80, 13),
      new Book(2, "But How Do It Know", "J. Clark Scott", 59.9, 22),
      new Book(3, "Clean Code", "Robert Cecil Martin", 50, 5),
      new Book(4, "Zero to One", "Peter Thiel", 45, 12),
      new Book(5, "You Don't Know JS", "Kyle Simpson", 39.9, 9),
    ];
  }

  addBook(book) {
    const exists = this.books.find(b => b.id === book.id);
    if (exists) return false;

    this.books.push(book);
    return true;
  }

  updateBook(id, title, author, price, quantity) {
    const book = this.books.find(b => b.id === id);
    if (!book) return false;

    book.title = title;
    book.author = author;
    book.price = price;
    book.quantity = quantity;
    return true;
  }

  deleteBook(id) {
    const index = this.books.findIndex(b => b.id === id);
    if (index === -1) return false;

    this.books.splice(index, 1);
    return true;
  }

  getBookById(id) {
    return this.books.find(b => b.id === id);
  }

  getBooks() {
    return this.books;
  }
}

module.exports = BookRepository;