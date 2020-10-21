let myLibrary = [];

function Book(title, author, pageNumber, status = false) {
  this.title = title;
  this.pageNumber = pageNumber;
  this.author = author;
  this.status = status;
}

function addBookToLibrary() {
  let addBtn = document.getElementById('addBtn');

  addBtn.addEventListener('click', function (e) {
    let bookTitle = document.getElementById('bookTitle').value;
    let bookAuthor = document.getElementById('bookAuthor').value;
    let pageNum = document.getElementById('pageNum').value;
    let bookStatus = document.getElementById('readStatus').checked;

    let newBook = new Book(bookTitle, bookAuthor, pageNum, bookStatus);
    myLibrary.push(newBook);
    e.preventDefault();
  });


}

function LoopTheArray() {
  let tableBody = document.querySelector('.body');

  for (let element of myLibrary) {
    let trow = document.createElement('tr');
    let tdTitle = document.createElement('td');
    tdTitle.textContent = element.title;
    let tdAuthor = document.createElement('td');
    tdAuthor.textContent = element.author;
    let tdAge = document.createElement('td');
    tdAge.textContent = element.pageNumber;
    let tdStatus = document.createElement('td');
    tdStatus.textContent = element.status;

    trow.appendChild(tdTitle);
    trow.appendChild(tdAuthor);
    trow.appendChild(tdAge);
    trow.appendChild(tdStatus);
    tableBody.appendChild(trow);

  }
}


addBookToLibrary();
LoopTheArray();