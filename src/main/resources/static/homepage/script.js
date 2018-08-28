$(function () {

    /*-------------------------------------------
    Load Page
    ---------------------------------------------*/

    $('body').waitForImages({
        finished: function () {
            console.log("waitForImages method finished");
            Website();
            $('body').jKit();
        },
        waitForAll: true
    });

    /*-------------------------------------------
    Scroll link page transitions
    ---------------------------------------------*/

    $("a.scroll-link").live("click", function () {
        console.log("scroll link page transitions method");
        $this = $(this);
        var link = $this.attr('href');
        var current_url = $(location).attr('href');


        setTimeout(function () {
            $('#preloader').delay(50).fadeIn(600);

            setTimeout(function () {

                $('body').waitForImages({
                    finished: function () {
                        Website();
                        backLoading();
                        $('.opacity-nav').delay(50).fadeOut(600);
                    },
                    waitForAll: true
                });
            }, 1000);
        }, 0);
    });

    /*-------------------------------------------
    Ajax link page transitions
    ---------------------------------------------*/

    $("a.ajax-link").live("click", function () {
        console.log("Ajax link page transitions method");

        $this = $(this);
        var link = $this.attr('href');
        var current_url = $(location).attr('href');

        if (link != current_url && link != '#') {
            $.ajax({
                url: link,
                processData: true,
                dataType: 'html',
                success: function (data) {
                    document.title = $(data).filter('title').text();
                    current_url = link;
                    if (typeof history.pushState != 'undefined') history.pushState(data, 'Page', link);

                    setTimeout(function () {
                        $('#preloader').delay(50).fadeIn(600);
                        $('html, body').delay(1000).animate({ scrollTop: 0 }, 1000);

                        setTimeout(function () {

                            $('#ajax-content').html($(data).filter('#ajax-content').html());
                            $('#ajax-sidebar').html($(data).filter('#ajax-sidebar').html());

                            $('body').waitForImages({
                                finished: function () {
                                    Website();
                                    backLoading();
                                    $('.opacity-nav').delay(50).fadeOut(600);
                                },
                                waitForAll: true
                            });
                        }, 1000);
                    }, 0);
                }
            });
        }
        return false;
    });


    /*-------------------------------------------
    When you click back arrow
    ---------------------------------------------*/


    function backLoading() {
        console.log("backLoading() method");

        $(window).on("popstate", function () {
            $('body').fadeOut('slow', function () {
                location.reload();
            });
            $('body').fadeIn();
        });
    }

    /*-------------------------------------------
    Load Page - next Open Site
    ---------------------------------------------*/

    function Website() {
        console.log("Website() method");

        CheckScripts();
        Masonry();
        $('body').jKit();
        backgroundmenu();
        setTimeout(function () {
            $(".preloader").fadeOut(500);
        }, 2000);
        setTimeout(function () {
            $('header').fadeIn();
        }, 500);
    }


    /*-------------------------------------------
    Init and check list scripts
    ---------------------------------------------*/

    function CheckScripts() {
        console.log("checkScripts() method");
        $(document).ready(function () {
            preloaderCheck();
            Typewriting();
            sidebarhero();
        });

    }


    /*-------------------------------------------
    Masonry Check Script
    ---------------------------------------------*/

    function Masonry() {
        console.log("Masonry() method");
        var $container = $('.portfolio-grid');

        $container.imagesLoaded(function () {
            $container.masonry({
                itemSelector: 'li'
            });
        });
    }


    /*-------------------------------------------
    Multi purpose init Background menu
    ---------------------------------------------*/

    function backgroundmenu() {
        console.log("backgroundmenu() method");
        $(document).ready(function () {
            if ($("#header-fade").length) {

                $(window).scroll(function () {
                    if ($(this).scrollTop() > 10) {
                        $('header').fadeOut();
                    } else {
                        $('header').fadeIn();
                    }
                });
            }

            if ($("#header-white").length) {

                $(window).scroll(function () {
                    if ($(this).scrollTop() > 10) {
                        $('header').css("background", "white");
                        $('header .logo > a').css("borderBottom", "0");

                    } else {
                        $('header').css("background", "none");
                    }
                });
            }


        });

    }

    /*-------------------------------------------
    Typewriting init script
    ---------------------------------------------*/

    function Typewriting() {
        console.log("Typewriting() method");

        $(document).ready(function () {
            setTimeout(function () {
                if ($("#site-type").length) {
                    $(".typewrite span").typed({
                        strings: ["show case ", "projects "],
                        typeSpeed: 100,
                        backDelay: 500,
                        loop: false,
                        contentType: 'html', // or text
                        // defaults to false for infinite loop
                        loopCount: false,
                    });
                }
            }, 3000);
        });
    }


    /*-------------------------------------------
    Amazing Fade with scroll Sidebar
    ---------------------------------------------*/

    function sidebarhero() {
        console.log("sidebarhero() method");
        if ($("#hero").length) {
            var fadeStart = 100, fadeUntil = 800, fading = $('#hero');

            $(window).bind('scroll', function () {
                var offset = $(document).scrollTop()
                    , opacity = 0
                    ;
                if (offset <= fadeStart) {
                    opacity = 1;
                } else if (offset <= fadeUntil) {
                    opacity = 1 - offset / fadeUntil;
                }
                fading.css('opacity', opacity);
            });
        }
    }


    /*-------------------------------------------
    Open Check Scription
    ---------------------------------------------*/

    function OpenCheck() {
        console.log("OpenCheck() method");
        setTimeout(function () {
            hidePreloader();
        }, 1000);
    }


    /*-------------------------------------------
    Check Preloader
    ---------------------------------------------*/

    function preloaderCheck() {
        console.log("preloaderCheck() method");
        showPreloader();
        $(window).load(function () {
            hidePreloader();
        });
    }

    /*-------------------------------------------
    Functions Show / Hide Preloader
    ---------------------------------------------*/

    function showPreloader() {
        console.log("showPreloader() method");
        $(".preloader").fadeIn("slow");
    }

    function hidePreloader() {
        console.log("hidePreloader() method");
        $(".preloader").delay(2000).fadeOut("slow");
    }



})//End