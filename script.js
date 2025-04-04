$(document).ready(function () {
    var headerHeight = $('#header').outerHeight() || 0; 
    var prevScrollPos = window.pageYOffset; 

    $('html').css('scroll-behavior', 'auto');

    $('a.scrollto').on('click', function (e) {
        e.preventDefault(); 
        var target = this.hash;
        if ($(target).length) {
            var $target = $(target);
            var scrollto = $target.offset().top - headerHeight;
            $('html, body').stop().animate({
                scrollTop: scrollto
            }, 500, 'easeInOutCubic');
            history.replaceState(null, null, window.location.pathname + window.location.search);
        }
    });

    // Hamburger Menu Toggle
    $('.hamburger').on('click', function (e) {
        e.stopPropagation(); 
        $('.mobile-nav').toggleClass('active'); 
        $('body').toggleClass('no-scroll'); // Disable scrolling when menu is open
    });

    // Close Mobile Menu When Clicking a Link Inside It
    $('.mobile-nav a').on('click', function () {
        $('.mobile-nav').removeClass('active');
        $('body').removeClass('no-scroll'); // Re-enable scrolling when menu closes
    });

    // Close Menu If Clicking Outside of It
    $(document).on('click', function (event) {
        if (!$('.hamburger').is(event.target) && !$('.mobile-nav').is(event.target) && $('.mobile-nav').has(event.target).length === 0) {
            $('.mobile-nav').removeClass('active');
            $('body').removeClass('no-scroll'); // Ensure scrolling is re-enabled when clicking outside
        }
    });

    // Mobile-specific Scroll Behavior
    $(window).on('scroll', function () {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos > prevScrollPos) {
            $('#header').css('top', '-100px'); 
        } else {
            $('#header').css('top', '0');
        }
        prevScrollPos = currentScrollPos;
    });
});
