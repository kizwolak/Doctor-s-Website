import BlazeSlider from "blaze-slider";
import "blaze-slider/dist/blaze.css";

let mobileMenu = document.querySelector(".mobileMenu");
let mobileList = document.querySelector(".mobileList");
let suwak = document.querySelector("#suwak");

mobileMenu.addEventListener('click', () => {
    mobileList.classList.toggle('open');
    suwak.classList.toggle('openImg');
})