//JQUERY
$(document).ready(function() {
    //CODE HERE WITH JQUERY
    $("p").hover(
        function() {
            $(this).mouseenter("border-color:" , "#ea680");
        },
        function(){
            $(this).mouseleave("border-color:" , "#181F23"); 
       
    }
    );
});

