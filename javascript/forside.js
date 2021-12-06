//Nadin fariss

//navigation bar 
//console.log("works");

let hamburger, menu, menuItems, closeMenu, closeIcon;

window.addEventListener('DOMContentLoaded', (event) => {
    hamburger = document.querySelector("#hamburger");
    menu = document.querySelector(".nav__list-container");
    menuItems = document.querySelectorAll(".nav__list-item");
    closeMenu = document.querySelector(".nav__list-item--active");
    closeIcon = document.querySelector(".nav__icon2");

    hamburger.addEventListener("click", toggleMenu);
    closeIcon.addEventListener("click", toggleMenu);

    menu.style.visibility = "hidden";
})

function toggleMenu() {
    //hamburger;
    //console.log("function works")

    if (menu.style.visibility === "hidden") {
        menu.classList.add("showMenu");
        //menu.classList.remove("closeMenu");
        menu.style.visibility = "visible";
        //menuItems.style.visibility = "visible";
        hamburger.style.display = "none";
        closeIcon.style.display = "initial";
        //insert animation
    }
    else {
        menu.style.visibility = "hidden";
        menu.classList.remove("showMenu");
        //menu.classList.add("closeMenu");
        closeIcon.style.display = "none";
        hamburger.style.display = "initial";
        //menuItems.style.visibility = "hidden";
    }
}


//manglende pensum
