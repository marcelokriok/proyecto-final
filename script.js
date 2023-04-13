const navToggle = document.querySelector(".btn-menu")
const navMenu = document.querySelector("nav")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});