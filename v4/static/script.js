// JS code
function getWindowSize() {
    var width = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    
    return width;
}

function showMessage() {
    var width = getWindowSize();
    var message;

    if (width > 1080) {
        message = 'You are viewing this website on a large screen.';
    } else if (width > 768) {
        message = 'You are viewing this website on a medium-sized screen.';
    } else {
        message = 'You are viewing this website on a small screen.';
    }

    // alert(message);
}

showMessage();
// --------------------------

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