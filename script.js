document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const headerHeight = document.querySelector('header').offsetHeight;

    // Smooth scrolling behavior when clicking on the nav links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId);

            // Calculate the scroll position to ensure the section is centered
            const sectionTop = targetElement.offsetTop; // Get the top position of the section
            const sectionHeight = targetElement.offsetHeight; // Get the height of the section
            const sectionCenter = sectionTop + (sectionHeight / 2); // Calculate the center of the section

            // Adjust the scroll to center the section, accounting for the header height
            const scrollToPosition = sectionCenter - (window.innerHeight / 2) + headerHeight;

            // Smoothly scroll to the section's calculated position
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });

            // Remove 'active' class from all links and add it to the clicked one
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Update active link based on the section currently in the viewport
    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            // Check if the section is in the viewport (considering the header height)
            if (window.scrollY + headerHeight >= sectionTop && window.scrollY + headerHeight < sectionBottom) {
                currentSection = section.getAttribute("id");
            }
        });

        // Update the active navigation link
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });
});
