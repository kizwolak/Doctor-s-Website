let mobileMenu = document.querySelector(".mobileMenu");
let mobileList = document.querySelector(".mobileList");
let suwak = document.querySelector("#suwak");

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  mobileList.classList.toggle('open');
});


//https://blaze-slider.dev/
const el = document.querySelector('.blaze-slider');
new BlazeSlider(el, {
  all: {
    loop: true,
    slidesToShow: 1,
    enableAutoplay: true,
    autoplayInterval: 8000,
    transitionDuration: 300,
    slideGap: '3em',
  },
  '(min-width: 900px)': {
    loop: true,
    slidesToShow: 2,
  },
  '(min-width: 1200px)': {
    loop: true,
    slidesToShow: 3,
  },
});