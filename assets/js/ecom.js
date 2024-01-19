const hearts = document.querySelectorAll(".bi-heart");
// WISHLIST
hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
        if (heart.classList.contains("bi-heart")) {
            heart.classList.replace("bi-heart", "bi-heart-fill");
        } else {
            heart.classList.replace("bi-heart-fill", "bi-heart");
        }
    });
});

const carts = document.querySelectorAll(".bi-cart3");
// CART
carts.forEach((cart) => {
    cart.addEventListener("click", () => {
        if (cart.classList.contains("bi-cart3")) {
            cart.classList.replace("bi-cart3", "bi-cart-check-fill");
        } else {
            cart.classList.replace("bi-cart-check-fill", "bi-cart3");
        }
    });
});
// MENU BAR 
let menuBar = document.querySelectorAll(".bi-menu-down");
let menubar = document.querySelector(".menu-bar");
let navBar = document.getElementById("navbar");

menuBar.forEach((menu) => {
    menu.addEventListener("click", () => {
        if (menubar.classList.contains("menu-bar")) {
            menu.classList.replace("bi-menu-down", "bi-menu-up");
            menubar.classList.replace("menu-bar", "menuBar")
            menu.style.backgroundColor = "red";
        } else {
            menu.classList.replace("bi-menu-up", "bi-menu-down");
            menubar.classList.replace("menuBar", "menu-bar")
            menu.style.backgroundColor = "mediumseagreen";
        }
    });
});

navBar.addEventListener("click", () => {
    menuBar[0].classList.replace("bi-menu-up", "bi-menu-down");
    menubar.classList.replace("menuBar", "menu-bar")
    menuBar[0].style.backgroundColor = "mediumseagreen";
});
