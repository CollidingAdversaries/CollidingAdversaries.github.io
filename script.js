$(document).ready(function () {
    var headerHeight = $('#header').outerHeight() || 0; // Cache header height

    // Disable built-in CSS smooth scrolling to prevent conflicts
    $('html').css('scroll-behavior', 'auto');

    $('a.scrollto').on('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        var target = this.hash;
        if ($(target).length) {
            var $target = $(target);

            // Calculate target scroll position
            var scrollto = $target.offset().top - headerHeight;

            // Stop ongoing animations if necessary
            $('html, body').stop();

            // Perform smooth scrolling
            $('html, body').animate({
                scrollTop: scrollto
            }, 500, 'easeInOutCubic');

            // Replace hash in URL without affecting scroll position
            history.replaceState(null, null, window.location.pathname + window.location.search);
        }
    });

    // Function to highlight the active section
    function highlightActiveSection() {
        var scrollPosition = $(window).scrollTop() + headerHeight + 10; // Adjust for offset
        var windowHeight = $(window).height(); // Get viewport height

        var currentSection = null;
        var maxVisible = 0;

        $('section').each(function () {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).outerHeight();

            // Calculate how much of the section is visible in the viewport
            var visibleHeight = Math.min(sectionBottom, scrollPosition + windowHeight) - Math.max(sectionTop, scrollPosition);
            
            // If at least 50% of the section is visible, consider it the active one
            if (visibleHeight > maxVisible && visibleHeight > $(this).outerHeight() * 0.5) {
                maxVisible = visibleHeight;
                currentSection = $(this);
            }
        });

        // Update nav links
        if (currentSection) {
            var sectionId = currentSection.attr('id');
            $('nav ul li a').removeClass('active'); // Remove from all
            $('nav ul li a[href="#' + sectionId + '"]').addClass('active'); // Add to current
        }
    }

    // Call function on scroll
    $(window).on('scroll', highlightActiveSection);
    highlightActiveSection(); // Run on page load in case user refreshes mid-scroll
});
