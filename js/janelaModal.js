$(function(){

    closeWindow()
    openWindow()
    
    function openWindow() {
        $('.btnModalOpen').click(function(){
            $('.bg').fadeIn()
            $('.box__Modal').fadeIn()
            $('.mobileBtn').hide()
        })
    }

    
    function closeWindow() {
        $('.btnModalClose').click(function(){
            $('.bg').hide()
            $('.box__Modal').hide()
            $('.mobileBtn').fadeIn()
        })
    }
    
})