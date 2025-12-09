# Bookstore Management System

A simple command-line bookstore management application built with Node.js. This project allows you to manage a bookstore inventory, search for books, and process purchases.

## 📋 Features

- **Add Books**: Add new books to the inventory
- **Update Books**: Modify existing book information
- **Delete Books**: Remove books from the inventory
- **List Books**: View all books in the inventory
- **Search Books**: Search for books by title, author, or ID
- **Buy Books**: Purchase books with balance validation and stock checking

## 🚀 Prerequisites

Before running this project, make sure you have:

- **Node.js** installed (version 12 or higher)
- **npm** (Node Package Manager) - comes with Node.js

You can check if you have Node.js installed by running:
```bash
node --version
npm --version
```

## 📦 Installation

1. **Clone or navigate to the project directory**

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install the required package (`prompt-sync`) for user input.

## ▶️ How to Run

After installing dependencies, simply run:

```bash
npm start
```

Or directly with Node.js:
```bash
node index.js
```

The application will start and display a menu with options to interact with the bookstore.

## 📁 Project Structure

```
project/
├── index.js                    # Entry point - initializes and starts the application
├── package.json                # Project configuration and dependencies
├── package-lock.json           # Locked dependency versions
└── src/
    ├── models/
    │   └── Book.js            # Book data model (class definition)
    ├── repositories/
    │   └── BookRepository.js  # Data storage and CRUD operations
    ├── services/
    │   ├── SearchService.js   # Book search functionality
    │   └── BillingService.js  # Purchase and billing logic
    └── controllers/
        └── MenuController.js  # User interface and menu handling
```

## 🏗️ Architecture Overview

This project follows a **layered architecture** pattern:

### 1. **Models** (`src/models/`)
- **Book.js**: Defines the Book class with properties:
  - `id`: Unique identifier
  - `title`: Book title
  - `author`: Author name
  - `price`: Book price
  - `quantity`: Stock quantity

### 2. **Repositories** (`src/repositories/`)
- **BookRepository.js**: Manages book data storage
  - Stores books in an array (in-memory)
  - Provides methods: `addBook()`, `updateBook()`, `deleteBook()`, `getBookById()`, `getBooks()`
  - Pre-populated with 5 sample books

### 3. **Services** (`src/services/`)
- **SearchService.js**: Handles book searching
  - Searches by title, author, or ID (case-insensitive)
  
- **BillingService.js**: Handles purchase transactions
  - Validates stock availability
  - Checks customer balance
  - Updates book quantity after purchase
  - Returns receipt with purchase details

### 4. **Controllers** (`src/controllers/`)
- **MenuController.js**: User interface layer
  - Displays interactive menu
  - Handles user input
  - Coordinates between services and repository
  - Uses a **for loop** in the `list()` method to display books

### 5. **Entry Point** (`index.js`)
- Creates instances of all components
- Wires dependencies together
- Starts the menu controller

## 💡 How It Works

1. **Initialization**: When you run `index.js`, it:
   - Creates a `BookRepository` instance (with 5 pre-loaded books)
   - Creates `SearchService` and `BillingService` instances
   - Creates a `MenuController` with all dependencies
   - Starts the interactive menu

2. **User Interaction**: The menu controller displays options and waits for your input:
   - You select a number (1-7) to choose an action
   - The controller calls the appropriate service or repository method
   - Results are displayed in the console

3. **Data Flow**:
   ```
   User Input → MenuController → Service/Repository → BookRepository → Response
   ```

## 📖 Usage Examples

### Example 1: List All Books
```
Choose option: 4

--- Book List ---
1. Start with Why - Simon Sinek (13)
2. But How Do It Know - J. Clark Scott (22)
3. Clean Code - Robert Cecil Martin (5)
4. Zero to One - Peter Thiel (12)
5. You Don't Know JS - Kyle Simpson (9)
```

### Example 2: Search for a Book
```
Choose option: 5
Search query: clean

--- Search Results ---
3. Clean Code
```

### Example 3: Buy a Book
```
Choose option: 6
Book title: Clean Code
Quantity: 2
Enter your balance: 150

--- Receipt ---
{
  title: 'Clean Code',
  quantity: 2,
  price: 50,
  total: 100,
  remaining: 50
}
```

### Example 4: Add a New Book
```
Choose option: 1
ID: 6
Title: The Pragmatic Programmer
Author: Andy Hunt
Price: 55
Quantity: 10
Added!
```

## 🔧 Code Highlights

### For Loop Implementation
The `list()` method in `MenuController.js` uses a classic for loop to iterate through books:

```javascript
list() {
  console.log("\n--- Book List ---");
  const books = this.bookRepository.getBooks();
  for (let i = 0; i < books.length; i++) {
    const b = books[i];
    console.log(`${b.id}. ${b.title} - ${b.author} (${b.quantity})`);
  }
}
```

## ⚠️ Important Notes

- **Data Persistence**: All data is stored in memory. When you close the application, all changes (except pre-loaded books) are lost.
- **Input Validation**: The application has basic validation but may not handle all edge cases.
- **Balance Check**: When buying books, make sure you have sufficient balance, or the purchase will be rejected.

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment
- **prompt-sync**: Package for synchronous command-line user input

## 📝 License

ISC

---

**Enjoy managing your bookstore!** 📚

