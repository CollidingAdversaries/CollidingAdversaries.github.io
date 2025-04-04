document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the fixed header

    // Scroll event listener to highlight active section based on scroll position
    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight; // Subtract header height from the section's top position
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });

    // Smooth scrolling with header offset for the navigation links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId);

            // Scroll to the target section while accounting for the fixed header
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight, // Subtract header height to scroll correctly
                behavior: 'smooth'
            });
        });
    });
});
