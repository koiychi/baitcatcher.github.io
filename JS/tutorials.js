//JQUERY
$(document).ready(function() {
    //CODE HERE WITH JQUERY
    $ ("p").hover(
        function() {
            $(this).css("border-color" , "#ea680");
        },
   
        function(){
            $(this).css("border-color" , "gray"); 
       
    }
    );

});

