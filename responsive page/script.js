document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    // Change the background color of the navbar on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Change the style of menu items on hover (handled by CSS)
});
