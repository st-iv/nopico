// nav

$(document).ready(function() {
    // grab the initial top offset of the navigation 
    var stickyNavTop = $('nav').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function() {
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) {
            $('nav').addClass('sticky');
            $('.nav__link').css({ 'color': '#fff', 'font-weight': '700' });
        } else {
            $('nav').removeClass('sticky');
            $('.nav__link').css({ 'color': '#000', 'font-weight': '400' });
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});

// slick 

$(document).ready(function() {
    $('.banner__slideshow').slick({
        draggable: true,
        fade: true,
        arrows: false,
        speed: 700,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        autoplay: true
    });
    $('.cases__slider').slick({
        draggable: true,
        arrows: true,
        dots: true,
        speed: 700,
        infinite: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });
});

$(document).ready(function() {
    $(".menu-trigger").click(function(e) {
        e.preventDefault();
        $(".nav__list").toggle();
    });
});

//= modals.js

// links new tab

$(document).ready(function() {
    var myUrl = location.protocol + '//' + location.hostname;
    $('a[href^="http://"], a[href^="https://"]').not('[href^="' + myUrl + '"]').attr('target', '_blank');
});

// Плавный скролл по якорям
function slowScroll(id) {
  var offset = 0;
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - offset
    },
    500
  );
  return false;
}

//= calc.js