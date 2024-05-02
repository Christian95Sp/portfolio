//header menu fixed in primo piano durante lo scroll
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

//open menu mobile
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};
//remove menu mobile
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
};

/* 
//parole che cambiano nell'hero
let typed = new Typed(".input", {
    strings: ["Sviluppo Web.", "Web Designer.", "Fotografo."],
    typeSpeed: 80,
    backSpeed: 70,
    loop: true
}); */

/* x modale contattami */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}