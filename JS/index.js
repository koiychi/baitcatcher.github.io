var images = ['images/top-images/top-image1.png', 'images/top-images/top-image2.png', 'images/top-images/top-image3.png', 'images/top-images/top-image4.png'];
var index = 0; 
setInterval(function() {
    index = (index + 1) % images.length;
    document.getElementById('top-image').src = images[index];
}, 5000);



//HOVER: "EXPERIENCE"
function hovertosee() {
    var text = getElementById(text-experience);
    text = document.innerHTML("Experience");
}

function hoverChangeBGEffect() {
    document.body.style.transition = "background 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    document.body.style.background = "radial-gradient(circle, rgba(234,104,10,1) 0%, rgba(7,9,10,1) 55%)";  // rgba(234,104,10,1) 0%, rgba(7,9,10,1) 79%)
}

function resethoverChangeBGEffect() {
    document.body.style.transition = "background 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    document.body.style.background = "radial-gradient(circle, rgba(7,9,10,1) 0%, rgba(7,9,10,1) 100%)";
}


//JQUERY
$(document).ready(function() {
    //CODE HERE WITH JQUERY
});


