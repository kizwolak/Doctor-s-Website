let mobileMenu = document.querySelector(".mobileMenu");
let mobileList = document.querySelector(".mobileList");
let suwak = document.querySelector("#suwak");

(function () {
    let mobileList = document.createElement("ul")
    mobileList.className = "mobileList";
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");

    li1.textContent = "O MNIE";
    li2.textContent = "PRZYKŁADOWE OPERACJE";
    li3.textContent = "MIEJSCA PRZYJĘĆ";
    li4.textContent = "GABINET PRYWATNY"
    li5.textContent = "OPERACJE PRYWATNE"

}());

mobileMenu.addEventListener('click', () => {
    mobileList.classList.toggle('open');

    suwak.classList.toggle('openImg');
})