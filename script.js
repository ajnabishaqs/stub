let arrow = document.querySelector('.hamburger-btn');
let navbar = document.querySelector('.nv');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let navBg = document.querySelector('.nv');
let container = document.querySelector('.container');
let li1 = document.querySelector('.about');
let li2 = document.querySelector('.home');
let li3 = document.querySelector('.join');

arrow.onclick = function() {
    navbar.classList.toggle('nv-up');
    line1.classList.toggle('line1-up');
    line2.classList.toggle('line2-up');
    navBg.classList.toggle('nav-up')
    li1.classList.toggle('nav-item-up')
    li2.classList.toggle('nav-item-up')
    li3.classList.toggle('nav-item-up')
};


