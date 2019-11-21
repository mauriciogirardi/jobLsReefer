$(function(){

    function atualizarDescricaoSlider(){
        $('#nome-descri').text($('.slick-center').data('name'))
    }

    $('.fotos-slides').on('init',function(){
        atualizarDescricaoSlider()
    })

   
    $('.fotos-slides').slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrow-prev'),
        nextArrow: $('.arrow-next'),
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    infinite: true,
                    slidesToScroll: 1,
                    prevArrow: $('.arrow-prev'),
                    nextArrow: $('.arrow-next'),
                    centerMode: true,
                    slidesToShow: 2,
                   
                    // centerPadding: '40px'
                }

            },
            {
                breakpoint: 580,
                settings:{
                    infinite: true,
                    slidesToScroll: 1,
                    prevArrow: $('.arrow-prev'),
                    nextArrow: $('.arrow-next'),
                    centerMode: true,
                    centerMode: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 380,
                settings:{
                    infinite: true,
                    slidesToScroll: 1,
                    prevArrow: $('.arrow-prev'),
                    nextArrow: $('.arrow-next'),
                    centerMode: true,
                    centerMode: true,
                    slidesToShow: 1
                }   
            },
            {
                breakpoint: 320,
                settings:{
                    infinite: true,
                    slidesToScroll: 1,
                    prevArrow: $('.arrow-prev'),
                    nextArrow: $('.arrow-next'),
                    centerMode: true,
                    centerMode: true,
                    slidesToShow: 1
                }   
            }
        ]
    })

    $('.fotos-slides').on('afterChange',function(){
        atualizarDescricaoSlider()
    })

    // slides das marcas

    $('.carrocel-auto').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive:[
            {
                breakpoint: 760,
                settings:{                  
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1000,
                }
            },
            {
                breakpoint: 500,
                settings:{                  
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1000,
                }
            }
        ]
    })

})