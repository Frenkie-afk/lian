$(document).ready(function(){
    //carousel
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

    //tabs
    $( function() {
        $( "#tabs" ).tabs();
    } );

    //dialog
    $( function() {
        $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
                effect: "fade",
                duration: 500
            },
            hide: {
                effect: "fade",
                duration: 500
            }
        });

        $( "#search" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });
    } );
});