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

    // Smooth scrolling behavior with adjusted section positioning
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId);

            // Calculate the position to scroll to center the section in the viewport
            const targetTop = targetElement.offsetTop - headerHeight; // Top of the section adjusted for the header height
            const targetHeight = targetElement.offsetHeight;
            const targetCenter = targetTop + targetHeight / 2 - window.innerHeight / 2;

            // Adjust for cases where the next section is very short
            const adjustedScrollPosition = Math.min(targetCenter, document.body.scrollHeight - window.innerHeight);

            // Smoothly scroll to the target center
            window.scrollTo({
                top: adjustedScrollPosition,
                behavior: 'smooth'
            });

            // Update active class for the navigation link
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
