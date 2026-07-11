/*document.querySelectorAll("*").forEach((el) => {
  if (el.offsetWidth > document.body.offsetWidth) {
    console.log(el);
  }
});
console.log(getComputedStyle(document.querySelector("header")).backgroundColor);*/
/* nav mobile */
const navBtn = document.querySelector(".nav__btn");
const navMobile = document.querySelector(".nav__mobile");
const navBtnClose = document.querySelector(".nav-btn__close");

navBtn.addEventListener("click", () => {
  navMobile.classList.add("nav-mobile__active");
});
navBtnClose.addEventListener("click", () => {
  navMobile.classList.remove("nav-mobile__active");
});
