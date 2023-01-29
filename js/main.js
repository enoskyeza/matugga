(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Scroll listener for scroll animations

    // Get the container element
    var aboutsection = document.querySelector(".about-section-start");

    // Get the offset position of the container
    var aboutsectionTop = aboutsection.offsetTop;

    // Get the height of the container
    var aboutsectionHeight = aboutsection.offsetHeight;

    // Listen to the scroll event
    window.addEventListener("scroll", function() {
        // Get the current scroll position
        var scrollTop = window.pageYOffset;
    
        // Calculate the percentage of the scroll position relative to the height of the container
        var scrollPercent = (scrollTop - parallaxSectionTop) / parallaxSectionHeight;
    
        // Update the background-position of the container
        aboutsection.style.backgroundPosition = "center " + (-50 * scrollPercent) + "%";
    });


    // window.addEventListener('scroll', () => {
    //     document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    // }, false);

    // Services Slider
    $('.services_slider_wrapper').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
        }
    });
    
})(jQuery);