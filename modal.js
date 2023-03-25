const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const signBtn = document.querySelector(".signup");




modalBtn.addEventListener("click", function () {
    modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
});

signBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
});