let mobileMenu = document.querySelector(".mobileMenu");
let mobileList = document.querySelector(".mobileList");
let suwak = document.querySelector("#suwak");

mobileMenu.addEventListener('click', () => {
    mobileList.classList.toggle('open');
    suwak.classList.toggle('openImg');
});


//https://blaze-slider.dev/
const el = document.querySelector('.blaze-slider')
new BlazeSlider(el, {
  all: {
    loop: true,
    slidesToShow: 1,
    enableAutoplay: true,
    autoplayInterval: 8000,
    transitionDuration: 300,
  },
  '(min-width: 500px)': {
    loop: false,
    slidesToShow: 2,
  },
  '(min-width: 900px)': {
    slidesToShow: 3,
  },
  })