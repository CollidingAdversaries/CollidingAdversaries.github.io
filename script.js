document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Adjust header height dynamically in case it changes
    const headerHeight = document.querySelector('header').offsetHeight;

    // Function to update active link based on the current section
    function updateActiveLink(currentSectionId) {
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSectionId) {
                link.classList.add("active");
            }
        });
    }

    // Intersection Observer setup to detect which section is in view
    const observerOptions = {
        root: null,  // viewport
        threshold: 0.5  // section must be at least 50% visible to be considered in view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const section = entry.target;
            const sectionId = section.getAttribute('id');

            if (entry.isIntersecting) {
                // When the section is in view, update the active link
                updateActiveLink(sectionId);
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll behavior with header offset
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
