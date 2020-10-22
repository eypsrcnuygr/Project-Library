let myLibrary = [];

function Book(title, author, pageNumber, status = false) {
  this.title = title;
  this.pageNumber = pageNumber;
  this.author = author;
  this.status = status;
}

function addBookToLibrary() {
    let bookTitle = document.getElementById('bookTitle').value;
    let bookAuthor = document.getElementById('bookAuthor').value;
    let pageNum = document.getElementById('pageNum').value;
    let bookStatus = document.getElementById('readStatus').checked;

    let newBook = new Book(bookTitle, bookAuthor, pageNum, bookStatus);
    myLibrary.push(newBook);
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
    let deleteBtn = document.createElement('button')
    let tdButton = document.createElement('td')
    tdButton.appendChild(deleteBtn)
    deleteBtn.setAttribute('class', 'btnDelete')
    deleteBtn.setAttribute('data', myLibrary.indexOf(element))

    trow.appendChild(tdTitle);
    trow.appendChild(tdAuthor);
    trow.appendChild(tdAge);
    trow.appendChild(tdStatus);
    trow.appendChild(tdButton)
    tableBody.appendChild(trow);

  }
}

document.querySelector('.form').addEventListener('submit', function(e) {
  clearView();
  addBookToLibrary();
  LoopTheArray();
  e.preventDefault();
},);

function clearView() {
  document.querySelector('tbody').innerHTML = '';
}


let modal = document.getElementById("form-modal");

// Get the button that opens the modal
let addBookBtn = document.getElementById("addBookBtn");

// Get the <span> element that closes the modal
let cancelBtn = document.getElementsByClassName("cancel-btn")[0];

// When the user clicks on the button, open the modal
addBookBtn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
cancelBtn.onclick = function() {
  modal.style.display = "none";
};

var deleteBtn = document.querySelectorAll('.btnDelete')

deleteBtn.onclick = function() {
  for (let i = 0; i < deleteBtn.length; i++) {
    myLibrary.splice(0, 1)
    clearView()
    LoopTheArray()
  }
}
