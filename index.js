let myLibrary = [];

function toggleStatus(book) {
  book.status = !book.status;
}

function clearView() {
  document.querySelector('tbody').innerHTML = '';
}

function deleteBook(bookId) {
  myLibrary.splice(bookId, 1);
  localStorage.setItem('bookLibrary', JSON.stringify(myLibrary));
  clearView();
  LoopTheArray();
}

function LoopTheArray() {
  const tableBody = document.querySelector('.body');

  for (const element of myLibrary) {
    const trow = document.createElement('tr');
    const tdTitle = document.createElement('td');
    tdTitle.textContent = element.title;
    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = element.author;
    const tdAge = document.createElement('td');
    tdAge.textContent = element.pageNumber;
    const tdStatus = document.createElement('td');
    tdStatus.textContent = element.status;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    const tdButton = document.createElement('td');
    tdButton.appendChild(deleteBtn);
    deleteBtn.setAttribute('class', 'btnDelete');
    deleteBtn.setAttribute('data', myLibrary.indexOf(element));

    const toogleButton = document.createElement('button');
    const tdToggle = document.createElement('td');
    tdToggle.appendChild(toogleButton);
    toogleButton.setAttribute('class', 'toggle-button');
    toogleButton.textContent = 'Toggle';

    trow.appendChild(tdTitle);
    trow.appendChild(tdAuthor);
    trow.appendChild(tdAge);
    trow.appendChild(tdStatus);
    trow.appendChild(tdButton);
    trow.appendChild(tdToggle);
    tableBody.appendChild(trow);

    toogleButton.addEventListener('click', () => {
      toggleStatus(element);
      tdStatus.textContent = element.status;
    });


    deleteBtn.addEventListener('click', () => {
      deleteBook(myLibrary.indexOf(element));
    });
  }
}

window.addEventListener('load', () => {
  if (localStorage.getItem('bookLibrary', JSON.stringify(myLibrary))) {
    myLibrary = JSON.parse(localStorage.getItem('bookLibrary'));
  } else {
    myLibrary = [];
  }
  LoopTheArray();
});

function Book(title, author, pageNumber, status = false) {
  this.title = title;
  this.pageNumber = pageNumber;
  this.author = author;
  this.status = status;
}

function addBookToLibrary() {
  const bookTitle = document.getElementById('bookTitle').value;
  const bookAuthor = document.getElementById('bookAuthor').value;
  const pageNum = document.getElementById('pageNum').value;
  const bookStatus = document.getElementById('readStatus').checked;

  const newBook = new Book(bookTitle, bookAuthor, pageNum, bookStatus);
  myLibrary.push(newBook);
  localStorage.setItem('bookLibrary', JSON.stringify(myLibrary));
}


document.querySelector('.form').addEventListener('submit', (e) => {
  clearView();
  addBookToLibrary();
  LoopTheArray();
  e.preventDefault();
});


const modal = document.getElementById('form-modal');

const addBookBtn = document.getElementById('addBookBtn');

const cancelBtn = document.getElementsByClassName('cancel-btn')[0];

function cancelFunc() {
  modal.style.display = 'none';
}

function blockFunc() {
  modal.style.display = 'block';
}

addBookBtn.addEventListener('click', blockFunc());

cancelBtn.addEventListener('click', cancelFunc());