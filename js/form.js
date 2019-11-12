$(function(){
    
    $('.input').focus(function(){
        $(this).parent().addClass('focus');
        $(this).css('border-bottom','2px solid #00bcd4')

    }).blur(function(){

        if($(this).val() === '') {
            $(this).parent().removeClass('focus');
            $(this).css('border-bottom','2px solid rgba(255, 255, 255, 0.877)')     
        }
    })

})