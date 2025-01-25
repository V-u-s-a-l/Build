/* menu click */

const navBox = document.querySelector('.nav-box');
const navbarSpan = document.querySelector('.navbar-span');
navbarSpan.addEventListener('click',barClick);
function barClick(){
    navBox.classList.toggle('active');
    navbarSpan.classList.toggle('active');
}
 /*menu scroll */
const menu = document.querySelector('menu');
window.addEventListener('scroll',menuScroll);
function menuScroll() {
    menu.classList.toggle('menu-fixed',window.scrollY);
}

 /*submenu */
const submenuLinkPrev = document.querySelector('.submenu-link-prev');
const submenuLinkNext = document.querySelector('.submenu-link-next');
const submenu = document.querySelectorAll('.submenu');
submenuLinkPrev.addEventListener('click', () => {
    submenu[0].classList.toggle('submenu-click');
});
submenuLinkNext.addEventListener('click', () => {
    submenu[1].classList.toggle('submenu-click');
});

/* Area */

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const areaBoxes = document.querySelector('.area-boxes');
const area = document.querySelector('.area');
const areaLength = document.querySelectorAll('.area').length;
const areaMax = ((areaLength - 2) * area.offsetWidth);
next.addEventListener('click', () => {
    if(areaBoxes.scrollLeft < areaMax){
        areaBoxes.scrollLeft += area.offsetWidth;
    }else if(areaBoxes.scrollLeft == areaMax ){
            areaBoxes.scrollLeft = 0;
    }    
});


prev.addEventListener('click', () => {
    if(areaBoxes.scrollLeft > area.offsetWidth){
        areaBoxes.scrollLeft -= area.offsetWidth;
    }else if(areaBoxes.scrollLeft == 0){
        areaBoxes.scrollLeft = areaMax;
    }
});



