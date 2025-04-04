$(document).ready(function () {
    var $header = $('#header');
    var headerHeight = $header.outerHeight() || 0; // Ensure valid number
    console.log("Header Height: ", headerHeight);

    // Disable built-in smooth scrolling from CSS (fixes double-scroll)
    $('html').css('scroll-behavior', 'auto');

    $('a.scrollto').on('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        var target = this.hash;
        console.log("Hash Target: ", target);

        if ($(target).length) {
            var $target = $(target);

            // Stop any ongoing scroll animation immediately
            $('html, body').stop(true, true);

            // Delay ensures layout calculations are stable
            setTimeout(function () {
                var scrollto = $target.offset().top - headerHeight;
                console.log("Scroll To: ", scrollto);

                // Perform smooth scrolling using jQuery
                $('html, body').animate({
                    scrollTop: scrollto
                }, 600, 'easeInOutCubic'); 

                // Replace hash without affecting scroll position
                history.replaceState(null, null, window.location.pathname + window.location.search);

            }, 10); // Small delay to allow for rendering
        } else {
            console.log("Target element not found: ", target);
        }
    });
});
