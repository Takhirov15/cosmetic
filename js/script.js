/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

const navToggle = document.querySelector("#navToggle");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".navIcon");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    navIcon.forEach((icon) => {
        icon.classList.toggle("hidden");
    });
});


window.addEventListener(
    "resize", () => {
        if (document.body.clientWidth > 720) {
            nav.classList.remove("open");
            navIcon.forEach((icon) => {
                icon.classList.remove("hidden");
            });
            navOpenIcon.classList.add("hidden");
        }
    },
    { passive: false }
);




