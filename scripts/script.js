//menu burger
const menuButton = document.querySelector("#menu-icon");
const toggleMenu = document.querySelector(".toggle-menu");

menuButton.addEventListener("click", () => {
    if (toggleMenu.style.display == "block") {toggleMenu.style.display = "none";menuButton.classList.remove("active");}
    else {toggleMenu.style.display = "block";;menuButton.classList.add("active");}
})
