define(['jquery', 'slick'], function($) {
    'use strict';

    return function() {
        var $slider = $('.gallery-images');

        function initSlick() {
            if ($(window).width() <= 768) {
                // Only initialize for mobile view
                if (!$slider.hasClass('slick-initialized')) {
                    $slider.slick({
                        dots: true,
                        arrows: false,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                }
            } else {
                if ($slider.hasClass('slick-initialized')) {
                    // Destroy the Slick slider for larger screens
                    $slider.slick('unslick');
                }
            }
        }

        // Initialize Slick on page load
        initSlick();

        // Reinitialize on window resize
        $(window).on('resize', function() {
            initSlick();
        });
    };
});
