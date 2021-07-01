$(window).scroll(function() {
    var height = $(window).scrollTop();
    
         /*Если сделали скролл на 100px задаём новый класс для header*/
    if(height > 100){
    $('.stars').addClass('active');
    }
    
    });
    
    $('.cosmotnaut').hover(
           function(){
               $('.stars-cosmo').addClass('active');
         }
    );