$(document).ready(function () {
    var $header = $('#header');
    var headerHeight = $header.outerHeight() || 0; // Ensure valid number
    console.log("Header Height: ", headerHeight);

    // Prevent auto-jump by resetting scroll position on load
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    $('a.scrollto').on('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        var target = this.hash;
        console.log("Hash Target: ", target);

        if ($(target).length) {
            var $target = $(target);

            // Stop any ongoing scroll animation immediately
            $('html, body').stop(true, true);

            // Delay for layout stabilization
            setTimeout(function () {
                var scrollto = $target.offset().top - headerHeight;
                console.log("Scroll To: ", scrollto);

                // Remove hash from URL (prevents browser jump)
                history.pushState(null, null, ' ');

                // Perform smooth scrolling
                $('html, body').animate({
                    scrollTop: scrollto
                }, 600, 'easeInOutCubic'); // 'easeInOutCubic' gives smoother effect
            }, 10); // Small delay ensures layout is stable
        } else {
            console.log("Target element not found: ", target);
        }
    });
});
