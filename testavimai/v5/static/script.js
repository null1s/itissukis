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
// PRIDEDA ILGIO              //
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }
// V2 //
// var arrows = document.getElementsByClassName("arrow");
// var panels = document.getElementsByClassName("panel");

// for (var i = 0; i < arrows.length; i++) {
//   arrows[i].addEventListener("click", function() {
//     // Deactivate the last arrow
//     var lastActiveArrow = document.querySelector(".arrow.rotate");
//     if (lastActiveArrow) {
//       lastActiveArrow.classList.remove("rotate");
//     }
//     var lastActivePanel = document.querySelector(".panel.show")
//     if (lastActivePanel) {
//       lastActivePanel.classList.remove("active")
//     }

//     // Activate the clicked arrow
//     this.classList.toggle("rotate");
//     this.classList.toggle("show")
//   });
// }

const faqs = document.querySelectorAll(".faq")
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

// v3 //
// const images = document.getElementsByClassName("panel");
// for(let i = 0; i < images.length; i++){
//   for(let image of images){
//     image.classList.remove("panel")
//   }
//   this.classList.toggle("panel")
// }
