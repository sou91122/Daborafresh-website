(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        //Menu On Hover
        $('body').on('mouseenter mouseleave', '.nav-item,.top-dropdown', function (e) {
            if ($(window).width() > 750) {
                var _d = $(e.target).closest('.nav-item,.top-dropdown'); _d.addClass('show');
                setTimeout(function () {
                    _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
                }, 1);
            }
        });	
         //Menu On Hover
        //  top bar sticky
        $(function () {
            //caches a jQuery object containing the header element
            var header = $("#topbar-area");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 56) {
                    header.removeClass('sticky').addClass("add-sticky");
                } else {
                    header.removeClass("add-sticky").addClass('sticky');
                }
            });
        });
        //  top bar sticky
        // main-slider starts //
        $('#main-slider').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow:2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // main-slider ends //
        // product-carousel //
        $('#product-carousel').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // product-carousel //
        // featured-carousel //
        $('#featured-carousel').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll:1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // featured-carousel //
        // featured-brands-carousel //
        $('#featured-brands-carousel').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // featured-brands-carousel //
        // recently-viewed-carousel //
        $('#recently-viewed-carousel').slick({
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow:3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // recently-viewed-carousel //
        // products details thumb scroll
        $(".details-inner-indicators").niceScroll(
            {
                scrollspeed: 80,
                mousescrollstep: 80,
                cursorwidth:"0px"
            }
        );
        // products details thumb scroll
    });
}(jQuery));
