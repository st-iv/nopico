$(document).ready(function() {
    $('.banner__slideshow').slick({
    draggable: true,
    fade: true,
    speed: 700,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    autoplay: true
    });
});