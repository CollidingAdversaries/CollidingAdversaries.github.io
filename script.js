document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            // Calculate section position dynamically
            const sectionTop = section.offsetTop - 160; // Adjust the offset to account for the header height
            const sectionBottom = sectionTop + section.offsetHeight; // Get the bottom of the section

            // Check if current scroll position is within the section
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
});
