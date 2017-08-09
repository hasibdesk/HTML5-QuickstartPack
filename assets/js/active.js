(function ($) {
	"use strict";

    jQuery(window).load(function(){

             
        //Owl carousel Start//
            $(".classname").owlCarousel({
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dot:true,
             nav: true,
             mouseDrag:true,
             touchDrag:false,
             margin:0,
             responsive:{
                 0:{
                     items:1,
                 },
                 600:{
                     items:3,
                 },
                 1000:{
                     items:4,
                 }
             }
   



       
    });

    });


}(jQuery));	