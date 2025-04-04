document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Adjust header height dynamically in case it changes
    const headerHeight = document.querySelector('header').offsetHeight;

    // Scroll event listener
    window.addEventListener("scroll", () => {
        let currentSection = "";

        // Get the middle of the viewport
        const middleOfViewport = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            // Calculate section position
            const sectionTop = section.offsetTop - headerHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            // Check if the middle of the viewport is within the section's range
            if (middleOfViewport >= sectionTop && middleOfViewport < sectionBottom) {
                currentSection = section.getAttribute("id");
            }
        });

        // Update active link in the navigation menu based on the current section
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });
});
