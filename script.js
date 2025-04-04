document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Adjust header height dynamically in case it changes
    const headerHeight = document.querySelector('header').offsetHeight;

    // Scroll event listener
    window.addEventListener("scroll", () => {
        let currentSection = "";

        // Calculate which section is currently in view
        sections.forEach(section => {
            // Account for the fixed header's height when calculating the section's visibility
            const sectionTop = section.offsetTop - headerHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            // Check if the section is within the viewport
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
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
