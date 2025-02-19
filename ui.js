document.addEventListener("DOMContentLoaded", function () {
    // Apply fade-in animation when scrolling
    let fadeElements = document.querySelectorAll(".fade-in");

    function checkFadeIn() {
        fadeElements.forEach(element => {
            let position = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 50) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkFadeIn);
    checkFadeIn();

    // Smooth Scroll for Navbar Links
    let navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
