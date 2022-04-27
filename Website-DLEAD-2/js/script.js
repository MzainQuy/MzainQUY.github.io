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
            // loop: false,
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
    }
});