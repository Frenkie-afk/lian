$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        autoplay:true,
        autoplayTimeout:3500,
        autoplayHoverPause:true,
        autoplaySpeed:1000,
        navSpeed: 1000,
        dotsSpeed: 1000,

        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $( function() {
        $( "#tabs" ).tabs();
    } );
});