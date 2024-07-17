function clickMenu() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "midias/menu.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "midias/close.svg";
    }
}