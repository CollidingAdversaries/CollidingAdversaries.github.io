$(document).ready(function () {
    var $header = $('#header');
    console.log("Header: ", $header);

    var headerHeight = $header.outerHeight();
    console.log("headerHeight: ", headerHeight);

    $('a.scrollto').on('click', function (e) {
        var target = this.hash;
        console.log("Hash Target: ", target); // Log the target link (e.g., #about)

        if ($(target).length) {
            e.preventDefault();

            // Calculate scroll position considering the header height
            var scrollto = $(target).offset().top - headerHeight;
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
