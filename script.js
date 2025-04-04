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

            // Log to check scroll position
            console.log("Scroll To: ", scrollto);

            // Smooth scroll to the target position
            $('html, body').animate({
                scrollTop: scrollto
            }, 1500, 'easeInOutExpo');
        }
    });
});
