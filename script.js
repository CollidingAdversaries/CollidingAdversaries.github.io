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
});
