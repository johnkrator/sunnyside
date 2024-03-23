const menuToggle = document.getElementById("menuToggle");
const mobileSideNav = document.getElementById("mobileSideNav");

menuToggle.addEventListener("click", () => {
    mobileSideNav.classList.toggle("side-nav-open");
});