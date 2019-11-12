$(function(){
    
    var delay = 3000;
    var curIndex = 0;
    var qtdAutor;

    initSlider()
    autoPlay()

    function initSlider(){
        qtdAutor = $('.sobre-autor').length
        var sizeContainer = 100 * qtdAutor
        var sizeBoxSingle = 100 / qtdAutor

        $('.sobre-autor').css('width',sizeBoxSingle + '%')
        $('.scrollWraper').css('width',sizeContainer + '%')

        //.slider-bullets
        for(var i = 0; i < qtdAutor; i++){
            if(i == 0){
                $('.slider-bullets').append('<span style="background-color:rgb(130,130,130);"></span>');
            }else{
                $('.slider-bullets').append('<span></span>');
            }
        }
    }

    //ficar passando sozinho o slider.
    function autoPlay(){

        setInterval(function(){
            curIndex++;
            if(curIndex == qtdAutor){
                curIndex = 0;
            }
            goToSlider(curIndex);
        },delay)
    }

    function goToSlider(curIndex){
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scrollWraper').offset().left;
        $('.slider-bullets span').css('background-color','rgba(172, 172, 172, 0.829)')
        $('.slider-bullets span').eq(curIndex).css('background-color','rgb(130,130,130)')
        $('.scrollEquipe').stop().animate({'scrollLeft': offSetX + 'px'});
    }

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft': 0});
    })


})