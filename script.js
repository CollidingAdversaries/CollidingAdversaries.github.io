$(document).ready(function () {
    var headerHeight = $('#header').outerHeight() || 0; // Cache header height
    var prevScrollPos = window.pageYOffset; // Track the scroll position for hiding the header on scroll

    // Disable built-in CSS smooth scrolling to prevent conflicts
    $('html').css('scroll-behavior', 'auto');

    // Scroll to section
    $('a.scrollto').on('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior
        var target = this.hash;
        if ($(target).length) {
            var $target = $(target);
            var scrollto = $target.offset().top - headerHeight;
            $('html, body').stop();
            $('html, body').animate({
                scrollTop: scrollto
            }, 500, 'easeInOutCubic');
            history.replaceState(null, null, window.location.pathname + window.location.search);
        }
    });

    // Mobile menu toggle
    $('#mobile-menu').on('click', function () {
        $('ul.nav-links').toggleClass('active'); // Toggle the 'active' class on mobile menu
    });

    // Remove the sticky behavior completely for mobile
    // The header will now scroll with the page and not reappear when scrolling up
    $(window).on('scroll', function () {
        // No header behavior change when scrolling up or down anymore on mobile.
    });
});
