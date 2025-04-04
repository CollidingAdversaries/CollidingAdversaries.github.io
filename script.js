$(document).ready(function () {
    var $header = $('#header');
    var headerHeight = $header.outerHeight(); // Get the header height
    console.log("Header Height: ", headerHeight);

    // Smooth scrolling for navigation menu links
    $('a.scrollto').on('click', function (e) {
        e.preventDefault(); // Prevent the default jump-to-anchor behavior

        var target = this.hash;
        console.log("Hash Target: ", target);

        if ($(target).length) {
            var scrollto = $(target).offset().top - headerHeight; // Adjust for fixed header
            console.log("Scroll To: ", scrollto);

            // Smooth scroll to the target position
            $('html, body').stop().animate({
                scrollTop: scrollto
            }, 800, 'easeInOutExpo'); // Reduced animation time to make it snappier
        } else {
            console.log("Target element not found: ", target);
        }
    });
});
