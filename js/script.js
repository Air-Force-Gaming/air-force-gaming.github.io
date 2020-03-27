$(window).on('load', function() {
    $(document).ready(function(){
        $(".loader").hide();
        $(".header").show();
        $(".container").show();
        
        $('.modal').modal();
        $('.carousel').carousel();
    
        $('.carousel-slider').carousel({
            fullWidth: true,
            indicators: true
        });

        setInterval(function() {
            $('.carousel-slider').carousel('next');
        }, 6000);
        
        $('#carousel-left').click(function(){
            $('.carousel-slider').carousel('prev');
        });
    
        $('#carousel-right').click(function(){
            $('.carousel-slider').carousel('next');
        });
    });
});