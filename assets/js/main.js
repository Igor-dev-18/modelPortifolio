

function toggleMenu() {
    const menu = document.querySelector('.header__menu');

    menu.classList.toggle('active');
}

const btnMenu = document.querySelector('.header__toogle-button');
const btnClose = document.querySelector('.menu__btn-close');

btnMenu.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);
