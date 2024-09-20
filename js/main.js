'use strict';

// IBG
function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

// Loading
window.onload = () => {
    let loading = document.querySelector('.loading');

    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => loading.style.display = 'none', 300);
    }

    // Animation
    window.addEventListener('scroll', animation_init);

    function animation_init() {
        let animLeft = document.querySelectorAll('.animLeft');
        let animRight = document.querySelectorAll('.animRight');

        let leftRightBlocks = [];
        leftRightBlocks.push(...animLeft, ...animRight);

        let heightForLeftRight = document.body.clientHeight / 1.7;

        for (let leftRightBlock of leftRightBlocks) {
            if (leftRightBlock.getBoundingClientRect().top <= heightForLeftRight) {
                leftRightBlock.classList.add('_anim');
            }
        }

        let animBottom = document.querySelectorAll('.animBottom');

        let heightForBottom = document.body.clientHeight / 1.3;

        for (let bottomBlock of animBottom) {
            if (bottomBlock.getBoundingClientRect().top <= heightForBottom) {
                bottomBlock.classList.add('_anim');
            }
        }
    }

    animation_init();
}

// Burger
let burgerIcon = document.querySelector('.burger__icon');
let burgerNav = document.querySelector('.burger__nav');
let burgerBillet = document.querySelector('.burger__billet');

if (burgerIcon && burgerNav && burgerBillet) {

    let menuItems = burgerNav.querySelectorAll('.menu-item');
    if (menuItems.length > 0) {
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].querySelector('a').style.transitionDelay = `${(i + 1) * 100}ms, ${(i + 1) * 100}ms, 0s`;
        }
    }

    burgerIcon.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        burgerIcon.classList.toggle('_active');
        burgerNav.classList.toggle('_active');
        burgerBillet.classList.toggle('_active');

        if (menuItems.length > 0) {
            for (let menuItem of menuItems) {
                menuItem.classList.toggle('_active');
            }
        }
    })

}

// Header
let header = document.querySelector('.header');

if (header) {
    let headerInner = document.querySelector('.header__inner');
    let headerButton = document.querySelector('.header__button');

    window.addEventListener('scroll', headerAnim);

    headerAnim();

    function headerAnim() {
        if (scrollY > 40) {
            headerInner.style.minHeight = '60px';
            headerButton.style.padding = '8px 20px';
            header.style.boxShadow = '0px 1px 10px rgba(0,0,0,0.2)';
        } else {
            headerInner.style.minHeight = '';
            headerButton.style.padding = '';
            header.style.boxShadow = '';
        }
    }
}

// Hero Swider
let heroSwiperWrapper = document.querySelector('.hero-swiper-wrapper');
let heroSwiperBody = heroSwiperWrapper.querySelector('.swiper');

const heroSwiper = new Swiper(heroSwiperBody, {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1000,
    allowTouchMove: false,
    autoplay: {
        delay: 5000,
    },
});

// Trust Accordion
let trustAccordion = document.querySelector('.trust__accordion');

if (trustAccordion) {
    let accordionItems = trustAccordion.querySelectorAll('.trust__accordion-item');
    if (accordionItems.length > 0) {
        for (let accordionItem of accordionItems) {
            let accordionButton = accordionItem.querySelector('.trust__accordion-button');
            let accordionDropdown = accordionItem.querySelector('.trust__accordion-dropdown');
            let accordionHeight = accordionDropdown.offsetHeight;
            accordionDropdown.style.height = '0px';

            accordionButton.addEventListener('click', () => toggleAccordion());

            function toggleAccordion() {
                if (accordionItem.classList.contains('_active')) {
                    accordionItem.classList.remove('_active');
                    accordionDropdown.style.height = '0px';
                } else {
                    accordionItems.forEach(el => {
                        if (el.classList.contains('_active')) {
                            el.classList.remove('_active');
                            el.querySelector('.trust__accordion-dropdown').style.height = '0px';
                        }
                    })

                    accordionItem.classList.add('_active');
                    accordionDropdown.style.height = `${accordionHeight}px`;

                }
            }
        }
    }
}

// Staff Swiper
let staffSwiperWrapper = document.querySelector('.staff-swiper-wrapper');
let staffSwiperBody = staffSwiperWrapper.querySelector('.swiper');
let staffPrev = staffSwiperWrapper.querySelector('.swiper-button-prev');
let staffNext = staffSwiperWrapper.querySelector('.swiper-button-next');
let staffPagination = staffSwiperWrapper.querySelector('.swiper-pagination');

const staffSwiper = new Swiper(staffSwiperBody, {
    loop: true,

    centeredSlides: true,

    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,

    breakpoints: {

        479.98: {
            slidesPerView: 1.5,
        },

        659.98: {
            slidesPerView: 2,
        },

        767.98: {
            slidesPerView: 2.5,
        },

        992.98: {
            slidesPerView: 3,
        },

        1199.98: {
            slidesPerView: 3.5,
        }
    },

    pagination: {
        el: staffPagination,
        clickable: true,
    },

    navigation: {
        nextEl: staffNext,
        prevEl: staffPrev,
    },
});