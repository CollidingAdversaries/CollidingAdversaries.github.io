$(document).ready(function () {
    var $header = $('#header');
    var headerHeight = $header.outerHeight() || 0; // Ensure we always get a valid number
    console.log("Header Height: ", headerHeight);

    // Smooth scrolling for navigation menu links
    $('a.scrollto').on('click', function (e) {
        e.preventDefault(); // Stop default jump behavior

        var target = this.hash;
        console.log("Hash Target: ", target);

        if ($(target).length) {
            var $target = $(target);
            var scrollto = $target.offset().top - headerHeight; // Adjust for fixed header
            console.log("Scroll To: ", scrollto);

            // Remove hash from URL (prevents browser's default anchor jump)
            history.pushState(null, null, ' ');

            // Stop ongoing animations & perform smooth scroll
            $('html, body').stop(true, false).animate({
                scrollTop: scrollto
            }, 800, 'easeInOutExpo');
        } else {
            console.log("Target element not found: ", target);
        }
    });
});
