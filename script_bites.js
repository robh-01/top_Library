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
    for (const book of myLibrary) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
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
    }
}

function setIndexToNodeElements() {
    let c = 0; //to use this index later to delete book form myLibrary
    for(const book of myLibrary) {

    }
    c++
}