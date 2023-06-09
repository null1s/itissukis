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

    alert(message);
}

showMessage();