document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const headerHeight = document.querySelector('header').offsetHeight;

    // Function to calculate the center position of a section
    function getSectionCenterPosition(section) {
        const sectionTop = section.offsetTop; // Position of the section from the top of the document
        const sectionHeight = section.offsetHeight; // Height of the section
        const sectionCenter = sectionTop + (sectionHeight / 2); // Center position of the section

        // Adjust by the header height to ensure it's not hidden under the header
        return sectionCenter - (window.innerHeight / 2) + headerHeight;
    }

    // Smooth scroll behavior for navigation links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId);

            // Calculate the scroll position to center the section
            const targetCenterPosition = getSectionCenterPosition(targetElement);

            // Smoothly scroll to the section's center position
            window.scrollTo({
                top: targetCenterPosition,
                behavior: 'smooth'
            });

            // Update the active link
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Update active link on scroll
    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            // If the section is within the viewport, update the active link
            if (window.scrollY + headerHeight >= sectionTop && window.scrollY + headerHeight < sectionBottom) {
                currentSection = section.getAttribute("id");
            }
        });

        // Update the active class for navigation links
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });
});
