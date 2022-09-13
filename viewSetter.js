const styleSet = document.querySelector('#deviceStyle');

const toyLink = document.querySelector('#toyLink');


if (window.outerWidth < window.outerHeight) {
    styleSet.setAttribute("href", "./styleMobile.css")
}

if (window.outerWidth < 1000) {
    toyLink.setAttribute("href", "./tic-tac-toebot/index.html")
}