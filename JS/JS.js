const navBtn = document.querySelector('.top-icon .icons');
const navtoggle = document.querySelector('.nav-box .navigation .nav-title');
const navhover = document.querySelector('.nav-box .navigation .nav-icon');
const navbar = document.querySelector('.nav-box');
navBtn.addEventListener('click',()=>{
    navtoggle.classList.toggle('nav-toggle');
});
navBtn.addEventListener('click',()=>{
    navbar.classList.toggle('small-toggle');
});
navbar.addEventListener('click',()=>{
    navbar.classList.toggle('small-toggle');
});
navhover.addEventListener('mouseenter',()=>{
    navtoggle.classList.toggle('nav-toggle');
});
navtoggle.addEventListener('mouseleave',()=>{
    navtoggle.classList.toggle('nav-toggle');
});