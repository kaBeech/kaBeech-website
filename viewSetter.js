const styleSet = document.querySelector('#deviceStyle');

if (window.outerWidth < window.outerHeight) {
    styleSet.setAttribute("href", "./styleMobile.css")
}