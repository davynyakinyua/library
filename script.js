console.log("Hello world");

// initialize the an array to store all the books

const library = [
    {name:"To Kill a Mockingbird", author:"Harper Lee", pages:281}, {name:"1984", author:"George Orwell", pages:328},
    {name:"Pride and Prejudice", author:"Jane Austen", pages:279}, {name:"The Great Gatsby", author:"F. Scott Fitzgerald", pages:180},
    {name:"Moby Dick", author:"Herman Melville", pages:585}, {name:"War and Peace", author:"Leo Tolstoy", pages:1225},
    {name:"The Catcher in the Rye", author:"J.D. Salinger", pages:277}, {name:"The Lord of the Rings", author:"J.R.R. Tolkien", pages:1200},
    {name:"The Alchemist", author:"Paulo Coelho", pages:208}, {name:"The Hobbit", author:"J.R.R. Tolkien", pages:310},
    {name:"Fahrenheit 451", author:"Ray Bradbury", pages:158}, {name:"The Diary of a Young Girl", author:"Anne Frank", pages:283},

];

//create class constructor

class Books {

    //create a constructor function for books
    constructor (name, author, pages) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        
    }

    // prototype method for read and unread status of the book

    readProto(){

        alert(`${this.name} by ${this.author}`)
    }

    // Add a prototype for the method of a unique id crypto.randomUUID()
    id () {

        let randomId = crypto.randomUUID();

        console.log(`this is my id ${randomId}`);

        return randomId;
    }

    greet() {
        console.log(`Hello ${this.name}: ${this.author}`);
    }

}


// A function for creating an individual books and add to array library

function book (name, author, pages) {

   let bookTitle = new Books(name, author, pages);

    library.unshift(bookTitle);

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

        // add book title
        let bookTitle = document.createElement("h3");
        bookTitle.textContent = library[i].name;
        contentContainer.appendChild(bookTitle);
        
        let bookAuthor = document.createElement("p");
        bookAuthor.textContent = `Author: ${library[i].author}`;
        contentContainer.appendChild(bookAuthor);

        let bookPages = document.createElement("p");
        bookPages.textContent = `Pages: ${library[i].pages}`;
        contentContainer.appendChild(bookPages);

        // append the container to the main-container
        container.appendChild(contentContainer);

        // add container and two buttons for readUnread and remove book
        let buttonContainer = document.createElement("div");
        buttonContainer.className = "buttons-container";

        // create a button read unread
        let readUnreadBtn = document.createElement("button");
        readUnreadBtn.textContent = "unread";
        readUnreadBtn.id = "read-unread";
        readUnreadBtn.className = "btns";

        // append the button to button container
        buttonContainer.appendChild(readUnreadBtn);

        // create a remove book button
        let removeBook = document.createElement("button");
        removeBook.id = "remove-book";
        removeBook.className = "btns";
        removeBook.textContent = "Delete";

        // append the button to buttons container
        buttonContainer.appendChild(removeBook);

        // append the buttons container to cpntent container
        contentContainer.appendChild(buttonContainer);

        // add eventlistener for button remove
        removeBook.addEventListener("click", () => {
            contentContainer.remove();
        });


        // add eventlistener for readUnread button
        readUnreadBtn.addEventListener("click", (event) => {

            if(event.target.innerText == "unread"){
                console.log(readUnreadBtn.innerText);
                readUnreadBtn.innerText = "read";
                readUnreadBtn.className = "read-btn";
            } 
            
        });


    }


}


// new book function that allows a user to adds a book to the library

function newBook () {
    console.log("opening new book ...");

    // clear the container before adding new items

    container.innerHTML = '';

    // get the form container

    let formContainer = document.getElementById("content");

    // create a form element
    let form = document.createElement("form");

    // create a label and input for name
    const nameLabel = document.createElement("label");
    nameLabel.innerText = "Name:";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.required = true;

    // create a label and input for author
    const authorLabel = document.createElement("label");
    authorLabel.innerText = "Author:";

    const authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.id = "author";
    authorInput.required = true;

    //create a label and input for page numbers
    const pagesLabel = document.createElement("label");
    pagesLabel.innerText = "No. of pages:";

    const pagesInput = document.createElement("input");
    pagesInput.type = "text";
    pagesInput.id ="pages";
    pagesInput.required = true;
    
    // create a submit button
    const submitButton = document.createElement("button")
    submitButton.type = "submit";
    submitButton.innerText = "submit";

    // append elements to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(authorLabel);
    form.appendChild(authorInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(pagesLabel);
    form.appendChild(pagesInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(submitButton);

    // append the form to the form container
    formContainer.appendChild(form);

    // add an event listener for the form submission
    form.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("showing submit button ..");

        console.log();
        const name = nameInput.value;
        const author = authorInput.value;
        const pages = pagesInput.value;

        // call book function with the book details 
        book(name, author, pages);

        // clear the form fields
        form.reset();
    });

}

// display the books in library array
display();


//button to call the function new book
let addNewBook = document.getElementById("addBook");

// event listener for button
addNewBook.addEventListener("click", newBook);




// A function that calls the book objects prototype method  readUnread


// button that calls the function 

// eventlisterner for the button




//  NOTES
// validate form and colors
// add cancel button on form  
// refactor colors
//refactor code
// remove button for removing books - use id to target element