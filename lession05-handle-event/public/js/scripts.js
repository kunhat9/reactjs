(function ($) {
    "use strict";
    var windowWidth = $(window).width();
    $(window).trigger("resize");


    /* Mobile Menu
     -------------------------------------------------------*/
    $(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show();
    $("body").append("<div class='overlay'></div>");
    $(".navbar-toggle, .navbar-toggler").on("click", function () {
        $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass"));
        $(".sideMenu, .overlay").toggleClass("open");
        $(".overlay").on("click", function () {
            $(this).removeClass("open");
            $(".sideMenu").removeClass("open")
        })
    });
    $("body").on("click", ".sideMenu.open .nav-item", function () {
        if (!$(this).hasClass("dropdown")) {
            $(".sideMenu, .overlay").toggleClass("open")
        }
    });
    $(window).resize(function () {
        if ($(".navbar-toggler").is(":hidden")) {
            $(".sideMenu, .overlay").hide()
        } else {
            $(".sideMenu, .overlay").show()
        }
    })

    $('li.dropdown i').on('click', function () {
        $(this).parent().toggleClass('open');
    });

    /* Sticky Navigation
     -------------------------------------------------------*/
    $(window).scroll(function () {

        var windowWidth = $(window).width();
        if ($(window).scrollTop() > 190 & windowWidth > 974) {
            $('#sticky-nav').addClass("sticky");
            $('#sticky-nav .logo-wrap').addClass("shrink");
        } else {
            $('#sticky-nav').removeClass("sticky");
            $('#sticky-nav .logo-wrap').removeClass("shrink");
        }

        if ($(window).scrollTop() > 200 & windowWidth > 974) {
            $('#sticky-nav').addClass("offset");
        } else {
            $('#sticky-nav').removeClass("offset");
        }

        if ($(window).scrollTop() > 500 & windowWidth > 974) {
            $('#sticky-nav').addClass("scrolling");
        } else {
            $('#sticky-nav').removeClass("scrolling");
        }


        if ($(window).scrollTop() > 190) {
            $('.navbar-fixed-top').addClass("sticky");
        } else {
            $('.navbar-fixed-top').removeClass("sticky");
        }

    });

    /* Sidebar Navigation
     -------------------------------------------------------*/
    $('.toggle').on('click', function () {
        $(this).parent().toggleClass('active');
    });

    /* Mobile Detect
     -------------------------------------------------------*/
    if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
        $("html").addClass("mobile");
        $('.dropdown-toggle').attr('data-toggle', 'dropdown');
    } else {
        $("html").removeClass("mobile");
    }

    /* IE Detect
     -------------------------------------------------------*/
    if (Function('/*@cc_on return document.documentMode===10@*/')()) {
        $("html").addClass("ie");
    }

    /* Owl Carousel
     -------------------------------------------------------*/

    $('.category-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 4,
                rows: 2
            },
            640: {
                items: 5
            },
            768: {
                items: 7
            },
            992: {
                items: 7
            },
            1200: {
                items: 7
            }
        }
    });

    $('#utilities-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
            },
            640: {
                items: 4,
            },
            768: {
                items: 5
            },
            992: {
                items: 5
            },
            1200: {
                items: 5
            }
        }
    });

    $('.product-carousel').owlCarousel({
        loop: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            640: {
                items: 2,
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    $('#home-news').owlCarousel({
        loop: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            640: {
                items: 2,
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    /*----------------------------
     cart-plus-minus-button
     ------------------------------ */
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();

        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    /* Accordion
     -------------------------------------------------------*/
    function toggleChevron(e) {
        $(e.target).prev('.panel-heading').find("a").toggleClass('plus minus');
    }
    $('#accordion').on('hide.bs.collapse', toggleChevron);
    $('#accordion').on('show.bs.collapse', toggleChevron);


    /* Toggle
     -------------------------------------------------------*/
    var allToggles = $(".toggle > .panel-content").hide();

    $(".toggle > .acc-panel > a").on('click', function () {

        if ($(this).hasClass("active")) {
            $(this).parent().next().slideUp("easeOutExpo");
            $(this).removeClass("active");
        } else {
            $(this).parent().next(".panel-content");
            $(this).addClass("active");
            $(this).parent().next().slideDown("easeOutExpo");
        }

        return false;
    });


    /* Tooltip
     -------------------------------------------------------*/
    $(function () {
        $('[data-toggle="tooltip"]').tooltip({container: 'body'});
    })

    /* Single Product
     -------------------------------------------------------*/

// main large image (shop product)
    if ($('#gallery-main').length > 0) {
        var $gallery = $('#gallery-main').flickity({
            cellAlign: 'center',
            contain: true,
            wrapAround: true,
            autoPlay: false,
            prevNextButtons: true,
            percentPosition: true,
            imagesLoaded: true,
            lazyLoad: 1,
            pageDots: false,
            selectedAttraction: 0.1,
            friction: 0.6,
            rightToLeft: false,
            arrowShape: 'M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z'
        });

        // thumbs
        $('.gallery-thumbs').flickity({
            asNavFor: '#gallery-main',
            contain: true,
            cellAlign: 'left',
            wrapAround: false,
            autoPlay: false,
            prevNextButtons: false,
            percentPosition: true,
            imagesLoaded: true,
            pageDots: false,
            selectedAttraction: 0.1,
            friction: 0.6,
            rightToLeft: false
        });


        var $gallery = $('.mfp-hover');

        $gallery.on('dragStart.flickity', function (event, pointer) {
            $(this).addClass('is-dragging');
        })

        $gallery.on('dragEnd.flickity', function (event, pointer) {
            $(this).removeClass('is-dragging');
        })

        $gallery.magnificPopup({
            delegate: '.lightbox-img, .lightbox-video',
            callbacks: {
                elementParse: function (item) {
                    if (item.el.context.className == 'lightbox-video') {
                        item.type = 'iframe';
                    } else {
                        item.type = 'image';
                    }
                }
            },
            type: 'image',
            closeBtnInside: false,
            gallery: {
                enabled: true
            }
        });


        /* Lightbox popup
         -------------------------------------------------------*/
        $('.lightbox-img, .lightbox-video').magnificPopup({
            callbacks: {
                elementParse: function (item) {
                    if (item.el.context.className == 'lightbox-video') {
                        item.type = 'iframe';
                    } else {
                        item.type = 'image';
                    }
                }
            },
            type: 'image',
            closeBtnInside: false,
            gallery: {
                enabled: true
            },
            image: {
                titleSrc: 'title',
                verticalFit: true
            }
        });

    }
})(jQuery);


/* Scroll to Top
 -------------------------------------------------------*/

(function () {
    "use strict";

    var docElem = document.documentElement,
            didScroll = false,
            changeHeaderOn = 550;
    document.querySelector('#back-to-top');
    function init() {
        window.addEventListener('scroll', function () {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 50);
            }
        }, false);
    }

})();

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#back-to-top").addClass("show");
    } else {
        $("#back-to-top").removeClass("show");
    }

});

$('a[href="#top"]').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 1350, "easeInOutQuint");
    return false;
});
