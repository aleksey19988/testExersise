const hamburger = document.querySelector('.header__hamburger');

hamburger.onclick = () => {
    const hamburgerTopBorder = document.querySelector('.header__hamburger__top_border');
    const hamburgerBottomBorder = document.querySelector('.header__hamburger__bottom_border');
    const headerMenu = document.querySelector('.header__menu');
    
    hamburgerTopBorder.classList.toggle('open__hamburger__top_border');
    hamburgerBottomBorder.classList.toggle('open__hamburger__bottom_border');
    headerMenu.classList.toggle('header__menu-open');
};
