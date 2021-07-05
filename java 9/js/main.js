let nav = document.querySelector ("#navico")
let navi = document.querySelector (".navigation")
let navmenu = document.querySelector (".navmenu")

nav.addEventListener ("click", function (event) {
    event.preventDefault();

    navmenu.classList.toggle("show")
    navi.classList.toggle("gaweva")
    

});