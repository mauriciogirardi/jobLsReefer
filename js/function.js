$(function(){

    // menu-mobile
    menuMobile()
    function menuMobile(){
        $(document).ready(function(){
            $('.mobileBtn').click(function(){
                $('.sidebar-mobile').toggleClass('active-menu-mobile')
                $('.mobileBtn').toggleClass('toggle')
            
            })
        })
    }    

    //Scroll to top pagina main.
    $('#top').click(function(){
        $('html, body').animate({scrollTop : 0},800)
    })
   $(window).scroll(function(){
       if($(this).scrollTop() > 40) {
           $('#top').fadeIn()
       } else {
           $('#top').fadeOut()
       }
   })
   
});