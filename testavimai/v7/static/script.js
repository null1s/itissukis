// -------------------------- //
// HAMBURGERIO MENIU          //
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

// -------------------------- //
// NAVBARO SPALVA         //
const headerEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        headerEl.classList.add("nav-scrolled")
    } else if (window.scrollY <= 50) {
        headerEl.classList.remove("nav-scrolled")
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