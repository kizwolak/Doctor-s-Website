let mobileMenu = document.querySelector(".mobileMenu");
let mobileList = document.querySelector(".mobileList");

mobileMenu.addEventListener('click', () => {
    mobileList.classList.toggle('open');
})