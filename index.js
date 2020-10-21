let myLibrary = [];

function Book(title, pageNumber, author, status = false) {
  this.title = title;
  this.pageNumber = pageNumber
  this.author = author
  this.status = status
}

function addBookToLibrary() {
  myLibrary.push(Book.new('Perfect title', 304, 'Jelil Abudu'))
  myLibrary.push(Book.new('Awful title', 200, 'Sercan Uygur'))
  myLibrary.push(Book.new('Ok title', 150, 'John Doe'))
}

function LoopTheArray() {
  let tableBody = document.querySelector('tbody')
  
  myLibrary.forEach((element) => {
    let trow = document.createElement('tr')
    let tdTitle = document.createElement('td').textContent
    tdTitle.textContent = element.title
    let tdAuthor = document.createElement('td').textContent
    tdAuthor.textContent =element.author
    let tdAge = document.createElement('td').textContent
    tdAge.textContent = element.pageNumber
    let tdStatus = document.createElement('td').textContent
    tdStatus.textContent =element.status

    trow.appendChild(tdTitle)
    trow.appendChild(tdAuthor)
    trow.appendChild(tdAge)
    trow.appendChild(tdStatus)
    tableBody.appendChild(trow)
  })
  
}

document.addEventListener('load', LoopTheArray)




