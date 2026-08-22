const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {
        navbar.style.position = "fixed";
        navbar.style.background = "rgba(15,15,15,.9)";
        navbar.style.backdropFilter = "blur(12px)";
    } else {
        navbar.style.position = "absolute";
        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
    }

});