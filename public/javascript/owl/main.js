$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },

        800:{
            items:1
        },
        
        1000:{
            items:1
        }
    }
})

$('.owl-two').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,    
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },

        800:{
            items:4
        },
        
        1000:{
            items:4.5
        }
    }
})