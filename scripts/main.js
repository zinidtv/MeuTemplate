const url = "https://www.amazon.com.br/Siracusa-Guilherme-Sá-ebook/dp/B09ZMKJLD1?ref_=nav_signin"
const btn = document.querySelector("#btn")

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

function openInNewTab(url) {
    const win = window.open(url, "_blank")
    win.focus()
}

btn.addEventListener("click", () => {
    openInNewTab(url)
})