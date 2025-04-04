$(document).ready(function () {
    var headerHeight = $('#header').outerHeight() || 0; // Cache header height

    // Disable built-in CSS smooth scrolling to prevent conflicts
    $('html').css('scroll-behavior', 'auto');

    $('a.scrollto').on('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        var target = this.hash;
        if ($(target).length) {
            var $target = $(target);

            // Get target scroll position instantly
            var scrollto = $target.offset().top - headerHeight;

            // Check if we are already at the target position
            if ($(window).scrollTop() !== scrollto) {
                // Stop any active animation *only if scrolling is happening*
                if ($('html, body').is(':animated')) {
                    $('html, body').stop();
                }

                // Perform smooth scrolling
                $('html, body').animate({
                    scrollTop: scrollto
                }, 500, 'easeInOutCubic'); // Reduced duration for snappier feel

                // Replace hash without affecting scroll position
                history.replaceState(null, null, window.location.pathname + window.location.search);
            }
        }
    });

    // Function to highlight active section in navbar
    function highlightActiveSection() {
        var scrollPosition = $(window).scrollTop() + headerHeight + 10; // Adjust for offset

        $('section').each(function () {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                var sectionId = $(this).attr('id');
                $('nav ul li a').removeClass('active'); // Remove from all
                $('nav ul li a[href="#' + sectionId + '"]').addClass('active'); // Add to current
            }
        });
    }

    // Call function on scroll
    $(window).on('scroll', highlightActiveSection);
    highlightActiveSection(); // Run on page load in case user refreshes mid-scroll
});
