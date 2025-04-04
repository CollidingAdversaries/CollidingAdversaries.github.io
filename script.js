$(document).ready(function () {
    var headerHeight = $('#header').outerHeight() || 0; // Cache header height
    var prevScrollPos = window.pageYOffset; // Track scroll position

    // Disable CSS-based smooth scrolling to prevent conflicts
    $('html').css('scroll-behavior', 'auto');

    // Scroll to section
    $('a.scrollto').on('click', function (e) {
        e.preventDefault();
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
    $('.hamburger').on('click', function () {
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

    // Mobile specific scroll behavior for header
    $(window).on('scroll', function () {
        var currentScrollPos = window.pageYOffset;

        // If we scroll down, the header goes out of view
        if (currentScrollPos > prevScrollPos) {
            $('#header').css('top', '-100px'); // Move header out of view
        } else {
            $('#header').css('top', '0'); // Bring header back when scrolling up
        }
        prevScrollPos = currentScrollPos;

        // Counteract header top change by adjusting hamburger button position
        var headerTop = parseInt($('#header').css('top'), 10);
        if (headerTop === 0) {
            // When header is at top, place the hamburger button at the correct position
            $('.hamburger').css('bottom', '20px');
        } else {
            // When header is hidden, adjust the hamburger button's position to counteract
            $('.hamburger').css('bottom', (20 - headerHeight) + 'px');
        }
    });
});
