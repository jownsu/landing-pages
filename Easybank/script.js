let menu = document.querySelector('#menu');
let nav = document.querySelector('.nav-links');
let closeNav = document.querySelector('#close');

menu.addEventListener('click', e => {
    nav.classList.toggle('active');
    menu.classList.toggle('active');
});

closeNav.addEventListener('click' , e =>{
    nav.classList.toggle('active');
    menu.classList.toggle('active');
});