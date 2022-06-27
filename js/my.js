$(function(){
    $('.btn_fixed_bottom').click(function(){
        $('html,body').animate({scrollTop:0},500);
    });
    $('#menulist li:nth-child(2)').click(function(){
        $('html,body').animate({scrollTop:1869});});
     $('#menulist li:nth-child(3)').click(function(){
         $('html,body').animate({scrollTop:3045}); 

    // $(window).scroll(function () {

		

    //     var height = $(document).scrollTop();
        
                    
    //     console.log(height);
    //     })
})
$(window).scroll(function(){
    if ($(window).scrollTop() > 1000{
        $(".btn_fixed_bottom").fadeIn();
    }else{
        
    })
});
});