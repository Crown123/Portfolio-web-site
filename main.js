$(document).ready(function () {
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open')
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open')
    });

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2000);
    });

    $('#up').hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 400) {        // If page is scrolled more than 50px
            $('#up').fadeIn(300);    // Fade in the arrow
        } else {
            $('#up').fadeOut(300);   // Else fade out the arrow
        }
    });

    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1750);
    });

    AOS.init({
        easing: 'ease',
        duration: 1600
    })
});

