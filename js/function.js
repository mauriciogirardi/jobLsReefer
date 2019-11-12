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
   
});