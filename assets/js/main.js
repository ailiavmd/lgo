$(document).ready(function(){

    $('.search .input-group.date').datepicker({
        autoclose: true,
        format: 'dd-mm-yyyy'
    });

    $('.navigation a, .cta .button').on('click', function(e){
        e.preventDefault();
        var hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 60
        }, 400);
    })

});