class SearchService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  search(query) {
    query = query.toLowerCase();

    return this.bookRepository.getBooks().filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.id.toString() === query
    );
  }
}

module.exports = SearchService;