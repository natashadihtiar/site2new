const swiper = new Swiper('.swiper', {

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

window.addEventListener('scroll', function () {
    scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
});

//Burger
$(document).ready(function () {
    $('.icon__menu').click(function (event) {
        $('.icon__menu,.menu__body').toggleClass('menu-open');
        $('body').toggleClass('lock');
    });
});