$(document).ready(function () {
    // Cache the header element and get its height
    var $header = $('#header');
    var headerHeight = $header.outerHeight();

    // Smooth scrolling for navigation menu links with 'scrollto' class
    $('a.scrollto').on('click', function (e) {
        var target = this.hash;
        if ($(target).length) {
            e.preventDefault();

            // Calculate scroll position considering the header height
            var scrollto = $(target).offset().top - headerHeight;

            // Smooth scroll to the target position
            $('html, body').animate({
                scrollTop: scrollto
            }, 1500, 'easeInOutExpo');
        }
    });

    // Highlight active nav items on scroll
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop() + 10; // Offset for smoother tracking

        $('section').each(function () {
            var top = $(this).offset().top - headerHeight,
                bottom = top + $(this).outerHeight();

            // Check if current scroll position is within the section
            if (cur_pos >= top && cur_pos <= bottom) {
                // Remove active class from all nav items
                $('.nav-menu li').removeClass('active');

                // Add active class to the corresponding nav item
                $('.nav-menu a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
        });
    });

    // Back to top button visibility
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    // Back to top button click action
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });
});
