document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the fixed header
    const viewportHeight = window.innerHeight; // Get the height of the viewport

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

            // Adjust the scroll position based on the section height
            const targetOffsetTop = targetElement.offsetTop - headerHeight; // Subtract the header height
            const targetHeight = targetElement.offsetHeight;

            // Check if the target section is taller than the viewport
            let scrollToPosition = targetOffsetTop;

            if (targetHeight > viewportHeight) {
                // If the section is taller than the viewport, scroll to the middle of the section
                scrollToPosition = targetOffsetTop - (viewportHeight / 2) + (targetHeight / 2);
            }

            // Scroll to the target section while accounting for the fixed header
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        });
    });
});
