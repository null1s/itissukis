// -------------------------- //
// HAMBURGERIO MENIU          //
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navScrolled = document.querySelector("#hamb");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    navScrolled.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    navScrolled.classList.remove("active")
}))


// -------------------------- //
// NAVBARO SPALVA         //
const headerEl = document.querySelector(".navbar");
const dropdownEl = document.querySelector(".nav-menu");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        headerEl.classList.add("nav-scrolled")
        dropdownEl.classList.add("drop-scrolled")
    } else if (window.scrollY <= 50) {
        headerEl.classList.remove("nav-scrolled")
        dropdownEl.classList.remove("drop-scrolled")
    }
})

// -------------------------- //
// FAQ DROPDOWNAS             //
const faqs = document.querySelectorAll(".faq")
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});