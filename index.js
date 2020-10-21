let myLibrary = [];

function Book(title, pageNumber, author, status = false) {
  this.title = title;
  this.pageNumber = pageNumber
  this.author = author
  this.status = status
}

function addBookToLibrary() {
  let a = new Book('Perfect title', 304, 'Jelil Abudu')
  let b = new Book('Awful title', 200, 'Sercan Uygur', true)
  let c = new Book('Ok title', 150, 'John Doe')
  myLibrary.push(a)
  myLibrary.push(b)
  myLibrary.push(c)
}

function LoopTheArray() {
  let tableBody = document.querySelector('.body');
  
  for (let element of myLibrary) {
    let trow = document.createElement('tr');
    let tdTitle = document.createElement('td');
    tdTitle.textContent = element.title;
    let tdAuthor = document.createElement('td');
    tdAuthor.textContent =element.author;
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

addBookToLibrary()
LoopTheArray()




