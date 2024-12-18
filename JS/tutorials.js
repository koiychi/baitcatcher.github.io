//JQUERY
$(document).ready(function() {
    //CODE HERE WITH JQUERY

    $(".tutorial-logo").addClass("fade-in");

    $("p").hover(
        function() {
            $(this).css("border-color:" , "#ea680");
        },
        function(){
            $(this).css("border-color:" , "#181F23"); 
            
       
    }
    );
});

