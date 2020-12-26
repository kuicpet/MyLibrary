// DOM Elements
const addBooks = document.querySelector(".addBtn");
const bookForm = document.querySelector(".bookForm");
const library = document.querySelector(".library");
const cancelBtn = document.querySelector(".cancelBtn");


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
// addEventlisteners
addBooks.addEventListener("click", (e) => {
    e.preventDefault();
    showForm();
});
cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    removeForm();
})
