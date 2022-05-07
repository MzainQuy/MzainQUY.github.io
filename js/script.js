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

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 30px 35px -5px";
        document.getElementById("navbar").style.boxShadow = "rgba(0, 0, 0, 0.04) 0px 20px 20px -5px";
    } else {
        document.getElementById("navbar").style.background = "";
        document.getElementById("navbar").style.boxShadow = "";
        document.getElementById("navbar").style.boxShadow = "";
    }
}

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
    slidesPerView: 2,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
        375: {
            loop: true,
            slidesPerView: 1,
        },
        1240: {
            // loop: false,
            slidesPerView: 2,
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
    navigation: {
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
        375: {
            loop: true,
            slidesPerView: 1,
        },
        1240: {
            loop: true,
            slidesPerView: 2,
        },
    }
});

var swiper = new Swiper(".child-2mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
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
        375: {
            loop: true,
            slidesPerView: 1,
        },
        1240: {
            loop: true,
            slidesPerView: 2,
        },
    }
});