class BillingService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  buyBook(title, quantity, balance) {
    const book = this.bookRepository
      .getBooks()
      .find(b => b.title.toLowerCase().includes(title.toLowerCase()));

    if (!book) return { success: false, msg: "Book not found" };
    if (book.quantity < quantity)
      return { success: false, msg: "Not enough stock" };

    const total = book.price * quantity;

    if (balance < total)
      return { success: false, msg: "Insufficient balance" };

    book.quantity -= quantity;

    return {
      success: true,
      receipt: {
        title: book.title,
        quantity,
        price: book.price,
        total,
        remaining: balance - total,
      },
    };
  }
}

module.exports = BillingService;