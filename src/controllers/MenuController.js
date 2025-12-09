const prompt = require("prompt-sync")({ sigint: true });
const Book = require("../models/Book");

class MenuController {
  constructor(bookRepo, searchService, billingService) {
    this.bookRepo = bookRepo;
    this.searchService = searchService;
    this.billingService = billingService;
  }

  run() {
    while (true) {
      console.log("\n--- Bookstore Menu ---");
      console.log("1. Add Book");
      console.log("2. Update Book");
      console.log("3. Delete Book");
      console.log("4. List Books");
      console.log("5. Search Books");
      console.log("6. Buy Book");
      console.log("7. Exit");

      const choice = prompt("Choose option: ");

      switch (choice) {
        case "1": this.add(); break;
        case "2": this.update(); break;
        case "3": this.delete(); break;
        case "4": this.list(); break;
        case "5": this.search(); break;
        case "6": this.buy(); break;
        case "7": console.log("Goodbye!"); return;
        default: console.log("Invalid option");
      }
    }
  }

  add() {
    const id = parseInt(prompt("ID: "));
    const title = prompt("Title: ");
    const author = prompt("Author: ");
    const price = parseFloat(prompt("Price: "));
    const quantity = parseInt(prompt("Quantity: "));

    const success = this.bookRepo.addBook(
      new Book(id, title, author, price, quantity)
    );

    console.log(success ? "Added!" : "Book ID exists!");
  }

  update() {
    const id = parseInt(prompt("Book ID: "));
    const title = prompt("New title: ");
    const author = prompt("New author: ");
    const price = parseFloat(prompt("New price: "));
    const quantity = parseInt(prompt("New quantity: "));

    const success = this.bookRepo.updateBook(id, title, author, price, quantity);
    console.log(success ? "Updated!" : "Book not found!");
  }

  delete() {
    const id = parseInt(prompt("Book ID to delete: "));
    const success = this.bookRepo.deleteBook(id);
    console.log(success ? "Deleted!" : "Book not found!");
  }

  list() {
    console.log("\n--- Book List ---");
    const books = this.bookRepo.getBooks();
    for (let i = 0; i < books.length; i++) {
      const b = books[i];
      console.log(`${b.id}. ${b.title} - ${b.author} (${b.quantity})`);
    }
  }

  search() {
    const query = prompt("Search query: ");
    const results = this.searchService.search(query);

    console.log("\n--- Search Results ---");
    results.forEach(b => console.log(`${b.id}. ${b.title}`));
  }

  buy() {
    const title = prompt("Book title: ");
    const quantity = parseInt(prompt("Quantity: "));
    const balance = parseFloat(prompt("Enter your balance: "));

    const result = this.billingService.buyBook(title, quantity, balance);

    if (!result.success) return console.log(result.msg);

    console.log("\n--- Receipt ---");
    console.log(result.receipt);
  }
}

module.exports = MenuController;