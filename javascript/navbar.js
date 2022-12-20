const navs = () => {
    const hamicon = document.getElementById("hamburger");
    const navmenu = document.getElementById("navLinks");

    hamicon.addEventListener("click", () => {
    navmenu.classList.toggle("shownav");
});
}

navs();