const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    myLibrary.push(new Book(title, author, pages, readStatus))
}

function openBookForm() {
    library.parentNode.insertBefore(bookForm, library);
}

const library = document.querySelector('.library')
const bookContainer = document.querySelector('.book-container');
const bookForm = document.querySelector('.book-form');
bookForm.remove();
const addBookButton = document.querySelector('.library > .addBook');


addBookButton.addEventListener('click', openBookForm);