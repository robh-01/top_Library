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

function showBooksVisually() {
    bookContainer.textContent = '';
    let c = 0; //to use this index later to delete book form myLibrary
    for (const book of myLibrary) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card')
        bookCard.setAttribute('index', c);
        for (const property in book) {
                const paragraph = document.createElement('p');
                if(property == 'title'){
                    paragraph.textContent = 'Book: ' + book[property];
                }
                else if(property == 'author'){
                    paragraph.textContent = 'Author: ' + book[property];
                }
                else if(property == 'pages') {
                    paragraph.textContent = book[property] + ' pages';
                }
                else paragraph.textContent = book[property]? 'Read': 'Not Read';
                bookCard.appendChild(paragraph);
        }
        const deleteBookButton = document.createElement('button');
        deleteBookButton.classList.add('delete-book-btn');
        deleteBookButton.textContent = 'Delete';
        bookCard.appendChild(deleteBookButton);
        deleteBookButton.addEventListener('click', (e)=>{
            bookCard.remove();
            removeBookFromLibrary(e);
        })
        bookContainer.appendChild(bookCard);
        c++
    }
}

function removeBookFromLibrary(event) {
    indexOfBook = +event.target.parentNode.getAttribute("index");
    myLibrary.splice(indexOfBook, 1);
    showBooksVisually();
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
    if (bookReadStatusInput[0].checked) {
        readStatus = +bookReadStatusInput[0].value;
    }
    else readStatus = +bookReadStatusInput[1].value;
    addBookToLibrary(bookTitleInput.value, bookAuthorInput.value, bookPagesNumberInput.value, readStatus);
    showBooksVisually();
    bookForm.remove();
})
