$(document).ready(function () {
    var $header = $('#header');
    var headerHeight = $header.outerHeight() || 0; // Ensure valid number
    console.log("Header Height: ", headerHeight);

    // Prevent browser auto-scroll to anchor on page load
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 1);

    $('a.scrollto').on('click', function (e) {
        e.preventDefault(); // Stop default behavior

        var target = this.hash;
        console.log("Hash Target: ", target);

        if ($(target).length) {
            var $target = $(target);

            // Hide instant browser jump
            window.scrollTo(0, 0);

            // Wait for layout to stabilize before scrolling
            setTimeout(function () {
                var scrollto = $target.offset().top - headerHeight;
                console.log("Scroll To: ", scrollto);

                history.pushState(null, null, ' '); // Remove #id from URL

                $('html, body').stop(true, false).animate({
                    scrollTop: scrollto
                }, 800, 'easeInOutExpo');
            }, 50); // Small delay ensures stable layout
        } else {
            console.log("Target element not found: ", target);
        }
    });
});
