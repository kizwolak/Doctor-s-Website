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
      slidesToShow: 3,
    },
  })