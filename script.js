$(document).ready(function(){
    $('.modal').modal();
    $('.carousel').carousel();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

    setInterval(function() {
        $('.carousel.carousel-slider').carousel('next');
    }, 6000);
    
    
});