$(document).ready(function(){
    //carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoHeight: true,
        nav:true,
        navText: [ '', ' ' ],
        autoplay:false,
        autoplayTimeout:3500,
        autoplayHoverPause:true,
        autoplaySpeed:1000,
        navSpeed: 1000,
        dotsSpeed: 1000,
        responsive:{
            0:{
                items:1,
                dots:true,
                nav: false
            },
            425: {
                items:1,
                dots:true,
                nav: false
            },
            768: {
                items:1,
                dots:true,
                nav: true
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
                duration: 200
            },
            hide: {
                effect: "fade",
                duration: 200
            },
            draggable: false,
            resizable:false,
            closeText: null
        });

        $( "#opener" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });
    } );

    //click-active
    $('.burger').click(function(){
        $('.burger, .nav-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

});