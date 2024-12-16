//JQUERY
import $ from 'https://code.jquery.com/jquery-3.6.4.min.js';

$(document).ready(function() {
    $("#button-download").click(function(){
        $("#heading").text("Wait for your download to finish...");
        $("#subheading").text("If your download didn't start, download again.");
        $("#button-download").text("Download Again");
    });
});
