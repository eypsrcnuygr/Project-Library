let myLibrary = [];

function toggleStatus(book) {
  book.status = !book.status;
  localStorage.setItem('bookLibrary', JSON.stringify(myLibrary));
}

function clearView() {
  document.querySelector('tbody').innerHTML = '';
}

function deleteBook(bookId) {
  myLibrary.splice(bookId, 1);
  localStorage.setItem('bookLibrary', JSON.stringify(myLibrary));
}

function LoopTheArray() {
  myLibrary.map(element => {
    const tableBody = document.querySelector('.body');
    const trow = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdAge = document.createElement('td');
    const tdStatus = document.createElement('td');
    const deleteBtn = document.createElement('button');
    const tdButton = document.createElement('td');
    const toogleButton = document.createElement('button');
    const tdToggle = document.createElement('td');
    tdTitle.textContent = element.title;
    tdAuthor.textContent = element.author;
    tdAge.textContent = element.pageNumber;
    tdStatus.textContent = element.status;
    deleteBtn.textContent = 'Delete';
    tdButton.appendChild(deleteBtn);
    deleteBtn.setAttribute('class', 'btnDelete');
    deleteBtn.setAttribute('data', myLibrary.indexOf(element));


    tdToggle.appendChild(toogleButton);
    toogleButton.setAttribute('class', 'toggle-button');
    toogleButton.textContent = 'Toggle';

    trow.appendChild(tdTitle);
    trow.appendChild(tdAuthor);
    trow.appendChild(tdAge);
    trow.appendChild(tdStatus);
    trow.appendChild(tdButton);
    trow.appendChild(tdToggle);


    toogleButton.addEventListener('click', () => {
      toggleStatus(element);
      tdStatus.textContent = element.status;
    });


    deleteBtn.addEventListener('click', () => {
      deleteBtn.parentElement.parentElement.innerText = '';
      deleteBook(myLibrary.indexOf(element));
    });
    return (
      tableBody.appendChild(trow)
    );
  });
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

addBookBtn.addEventListener('click', blockFunc);

cancelBtn.addEventListener('click', cancelFunc);