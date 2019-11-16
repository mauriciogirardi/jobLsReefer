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
    var scroll = document.getElementById('top')
    window.addEventListener( scroll)
   
   
});