// Book class
class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.availability = true;  // Initially available
    }

    // Method to borrow the book
    borrowBook() {
        if (this.availability) {
            this.availability = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is currently not available.`);
        }
    }

    // Method to return the book
    returnBook() {
        if (!this.availability) {
            this.availability = true;
            console.log(`${this.title} has been returned.`);
        } else {
            console.log(`${this.title} was not borrowed.`);
        }
    }

    // Method to display book information
    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Available: ${this.availability ? 'Yes' : 'No'}`);
    }
}

// Library class
class Library {
    constructor() {
        this.books = [];
    }

    // Method to add a book to the library
    addBook(title, author, genre) {
        const newBook = new Book(title, author, genre);
        this.books.push(newBook);
        console.log(`Book '${title}' added to the library.`);
    }

    // Method to search for a book by title
    searchBook(title) {
        const book = this.books.find(b => b.title.toLowerCase() === title.toLowerCase());
        book ? book.displayInfo() : console.log(`Book titled '${title}' not found in the library.`);
    }

    // Method to display all books in the library
    displayBooks() {
        if (this.books.length === 0) {
            console.log("No books available in the library.");
            return;
        }

        console.log("Books in the library:");
        this.books.forEach(book => book.displayInfo());
    }
}

// Create a new library instance
const myLibrary = new Library();

// Add books to the library
myLibrary.addBook('Book 1', 'Author 1', 'Fantasy');
myLibrary.addBook('Book 2', 'Author 2', 'Horror');
myLibrary.addBook('Book 3', 'Author 3', 'Fiction');

// Display all books in the library
myLibrary.displayBooks();

// Search for a book by title
myLibrary.searchBook('Book 2');

// Borrow a book
const bookToBorrow = myLibrary.books[1];
bookToBorrow.borrowBook();

// Try to borrow the same book again
bookToBorrow.borrowBook();

// Display all books in the library after borrowing
myLibrary.displayBooks();
// Return borrowed book
bookToBorrow.returnBook();
myLibrary.displayBooks();
