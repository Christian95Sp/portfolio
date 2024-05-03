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

let listBg = document.querySelectorAll('.bg');
let listTab = document.querySelectorAll('.tab');
let titleBanner = document.querySelector('.banner h1');
window.addEventListener("scroll", (event) => {
    /*scrollY is the web scrollbar position (pixel)*/
    let top = this.scrollY;
    /*index is the order of classes bg (0,1,2,3,4,5,6,7,8)
    When scrolling the web, the classes bg scroll down,
    the bigger the index, the faster the movement
    */
    listBg.forEach((bg, index) => {
        if (index != 0 && index != 8) {
            bg.style.transform = `translateY(${(top * index / 2)}px)`;
        } else if (index == 0) {
            bg.style.transform = `translateY(${(top / 3)}px)`;
        }
    })
    titleBanner.style.transform = `translateY(${(top * 4 / 2)}px)`;

    /* parallax scroll in tab
    when tab's position is less than 550 px
    from scrollbar position add active class to animate 
    and vice versa
    */
    listTab.forEach(tab => {
        if (tab.offsetTop - top < 550) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    })
});

//far muovere razzo menu
/* function moveRockcet() {
    let rocket_icon = document.getElementById("rocket");
    rocket_icon.classList.add("bx-tada-hover");
}
 */
