$(document).ready(function () {
    var $header = $('#header');
    var headerHeight = $header.outerHeight(); // Get the header height
    console.log("Header Height: ", headerHeight);

    // Smooth scrolling for navigation menu links
    $('a.scrollto').on('click', function (e) {
        var target = this.hash;
        console.log("Hash Target: ", target); // Log the target (e.g., #about)

        if ($(target).length) {
            e.preventDefault(); // Prevent default anchor behavior

            // Calculate scroll position considering the header height
            var scrollto = $(target).offset().top - headerHeight; // Subtract header height from scroll position
            console.log("Scroll To: ", scrollto); // Log the scroll position

            // Smooth scroll to the target position
            $('html, body').animate({
                scrollTop: scrollto
            }, 1500, 'easeInOutExpo');
        } else {
            console.log("Target element not found: ", target);
        }
    });
});
