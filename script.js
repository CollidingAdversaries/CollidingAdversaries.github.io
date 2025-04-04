$(document).ready(function () {
    // No need for the smooth scroll handling anymore

    // You can still use the 'active' class handling based on scroll position
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop() + 10; // Slight offset for smoother tracking

        $('section').each(function () {
            var top = $(this).offset().top - $('header').outerHeight(),
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
});
