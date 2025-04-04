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

    // Hide header on scroll down, show on scroll up for mobile
    $(window).on('scroll', function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            $('#header').css('top', '0'); // Show the header when scrolling up
        } else {
            $('#header').css('top', '-' + headerHeight + 'px'); // Hide the header when scrolling down
        }
        prevScrollPos = currentScrollPos;
    });
});
