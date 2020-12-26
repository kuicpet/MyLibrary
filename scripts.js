// DOM Elements
const addBooks = document.querySelector(".addBtn");
const bookForm = document.querySelector(".bookForm");
const library = document.querySelector(".library");
const cancelBtn = document.querySelector(".cancelBtn");
const errorTitle = document.querySelector(".errorTitle");
const errorAuthor = document.querySelector(".errorAuthor");
const errorPage = document.querySelector(".errorPage");
const inputTitle = document.querySelector(".bookTitle");
const inputAuthor = document.querySelector(".author");
const inputPage = document.querySelector(".totalPages");
const addBook = document.querySelector(".addBookBtn");



//showForm
function showForm() {
    library.classList.add("hide");
    bookForm.classList.add("show");
}
//removeForm
function removeForm() {
    bookForm.classList.remove("show");
    library.classList.add("show");
}
//submitForm
function submitForm() {
    let data = {
        title: inputTitle.value,
        author: inputAuthor.value,
        pages: inputPage.value
    }
    if(this.title === ""){
        errorTitle.classList.remove("hide")
        setTimeout(() => {
            errorTitle.classList.add("hide");
        }, 3000);
    } else if(this.author === ""){
        errorAuthor.classList.remove("hide");
        setTimeout(() => {
            errorAuthor.classList.add("hide");
        }, 3000);
    } else if(this.pages === ""){
        errorPage.classList.remove("hide");
        setTimeout(() => {
            errorPage.classList.add("hide")
        }, 3000);
    } else {
        return console.log(data);
        
    }
}
// addEventlisteners
addBooks.addEventListener("click", (e) => {
    e.preventDefault();
    showForm();
});
cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    removeForm();
})
addBook.addEventListener("click", (e) => {
    e.preventDefault();
    submitForm();
})