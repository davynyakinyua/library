console.log("Hello world");

// initialize the an array to store all the books

const library = [];

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



// Dom manipulation

// create container element

let container = document.getElementById("content");

// function for the display of books on the viewport

function display () {

    // clear the container before adding new content

    container.innerHTML = '';

    // create a grid dynamically using a loop

    for(let i = 0; i < library.length; i++){

        let contentContainer = document.createElement("div");

        contentContainer.className = "contentContainer"

        // access the name of the book from the library array
        contentContainer.innerText = library[i].name;

        // append the container to the main-container
        container.appendChild(contentContainer);

    }


}


// new book function that adds a book to the library

function newBook () {

    // clear the viewport

    container.innerHTML = '';

    // get the form container

    let container = document.getElementById("content");

    // create a form element

    let form = document.createElement("form");

    // create a label and input for name



}

//button to call the function new book

// event listener for button




// function removeBook for removing book from library



// Button that call function removeBook

// eventlistener for the button






// A function read that calls the book objects prototype method  readUnread


// button that calls the function 

// eventlisterner for the button


