document.addEventListener("click", (event) => {
    const menuButton = event.target.closest("#menu-button");
    if (!menuButton) {
        return;
    }
    const nav = document.querySelector("nav");
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
});