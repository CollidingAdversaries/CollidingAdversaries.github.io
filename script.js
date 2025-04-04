document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let isScrolling = false;
    let scrollTimeout;

    // Function to update active link based on the current section
    function updateActiveLink() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - document.querySelector('header').offsetHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute("id");
            }
        });

        // Update active link based on the current section
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    }

    // Scroll event listener to track scroll position
    window.addEventListener("scroll", () => {
        if (isScrolling) return; // Prevent active class updates while scrolling

        // Set a timeout to run when scroll finishes
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveLink, 150); // 150ms delay for detecting scroll end
    });

    // Smooth scrolling with header offset and prevent multiple highlights during scroll
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId);

            // Scroll to the target section while accounting for the fixed header
            isScrolling = true;
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });

            // Remove active class from all links and add it to the clicked one
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");

            // After scroll finishes, allow active link updates again
            setTimeout(() => {
                isScrolling = false;
            }, 500); // Adjust time to match your smooth scroll duration
        });
    });
});
