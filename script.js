console.log("Hello world");

// initialize the an array to store all the books

const library = [];

let bookTitle;

//create a constructor function for books

function Books (name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}


// Add a prototype readUnread() method for read and unread status of the book

Books.prototype.readUnread = function (){
    // change background color of button to purple
}


// Add a prototype for the method of a unique id crypto.randomUUID()

Books.prototype.id = function () {

    let id = crypto.randomUUID();

    return id;
}


// A function for creating an individual books and add to array library

function book (name, author, pages) {

   bookTitle = new Books(name, author, pages);

    library.push(bookTitle);

    return display();

}


// function for the display of books on the viewport
// Dom manipulation

function display () {

    // create container element

    let container = document.getElementById("content");

    // create a grid dynamically using a loop

    for(let i = 0; i < library.length; i++){

        let contentContainer = document.createElement("div");

        contentContainer.className = "contentContainer"

        contentContainer.innerText = bookTitle.name

        container.appendChild(contentContainer);

    }

}


// A button and event listener that calls the addNewBook function




// function removeBook for removing book from library
// Button that call function removeBook






// A button that call readUnread() method prototype of constuctor function


