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

    // Mobile menu toggle (Hamburger Menu)
    $('.hamburger').on('click', function (e) {
        e.stopPropagation(); // Prevent propagation to document click (so menu doesn't close)
        $('.mobile-nav').toggleClass('active'); // Show or hide the mobile menu
    });

    // Close mobile menu when clicking a link inside it
    $('.mobile-nav a').on('click', function () {
        $('.mobile-nav').removeClass('active');
    });

    // Close menu if clicking outside of it
    $(document).on('click', function (event) {
        if (!$('.hamburger').is(event.target) && !$('.mobile-nav').is(event.target) && $('.mobile-nav').has(event.target).length === 0) {
            $('.mobile-nav').removeClass('active');
        }
    });

    // Mobile specific scroll behavior
    $(window).on('scroll', function () {
        var currentScrollPos = window.pageYOffset;

        // If we scroll down, the header goes out of view
        if (currentScrollPos > prevScrollPos) {
            $('#header').css('top', '-100px'); // Move header out of view
        } else {
            $('#header').css('top', '0'); // Bring header back when scrolling up
        }
        prevScrollPos = currentScrollPos;
    });
});
