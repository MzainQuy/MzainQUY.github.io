/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'collapes22')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
/*===== ACTIVE AND REMOVE MENU =====*/

// navbar-scroll-change-BG
const navbar = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', function() {
    if (window.scrollY >= 50) {
        navbar.classList.replace('nab-color', 'navbar-color-scroll');
    } else if (this.window.scrollY <= 50) {
        navbar.classList.replace('navbar-color-scroll', 'nab-color');
    }
});
// navbar-scroll-change-BG

// search-dom-style
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
btn.addEventListener('click', () => {
        search.classList.toggle('active')
        input.focus()
    })
    // search-dom-style

/*===== MENU SHOW =====*/


// slider-function-halaman-index-main
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3700,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".childSwiper", {
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            loop: true,
            slidesPerView: 1,
        },
        768: {
            loop: true,
            slidesPerView: 2,
        },
        1024: {
            loop: true,
            slidesPerView: 3,
        },



    }

});

var swiper = new Swiper(".childSwiper-2", {
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        320: {
            loop: true,
            slidesPerView: 1,

        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        640: {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 20
        },
        991: {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 20
        }

    }
});

var swiper = new Swiper(".child-2mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        320: {
            loop: true,
            centeredSlides: true,

            slidesPerView: 1,
        },
        1240: {
            loop: true,
            slidesPerView: 2,
        },
    }
});
// slider-function-halaman-index-main


// slider halaman program/slider-mentor
var swiper = new Swiper(".swiper-mentor", {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        320: {
            loop: true,
            slidesPerView: 1,
            centeredSlides: true,

        },
        768: {
            loop: true,
            slidesPerView: 2,
        },
        1024: {
            loop: true,
            slidesPerView: 3,
        },
    }
});
// halaman program/slider-mentor