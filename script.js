const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    myLibrary.push(new Book(title, author, pages, readStatus));
}

function openBookForm() {
    library.parentNode.insertBefore(bookForm, library);
}

const library = document.querySelector('.library');
const bookContainer = document.querySelector('.book-container');
const bookForm = document.querySelector('.book-form');
const addToLibraryBtn = bookForm.querySelector('button');
const bookTitleInput = bookForm.querySelector('*[id="title"]');
const bookAuthorInput = bookForm.querySelector('*[id="author"]');
const bookPagesNumberInput = bookForm.querySelector('*[id="pages"]');
const bookReadStatusInput = bookForm.querySelectorAll('*[name="readStatus"]');
bookForm.remove();
const addBookButton = document.querySelector('.library > .addBook');


addBookButton.addEventListener('click', openBookForm);
addToLibraryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let readStatus
    if(bookReadStatusInput[0].checked){
        readStatus = +bookReadStatusInput[0].value;
    }
    else readStatus = +bookReadStatusInput[1].value;
    addBookToLibrary(bookTitleInput.value, bookAuthorInput.value, bookPagesNumberInput.value, readStatus);
})