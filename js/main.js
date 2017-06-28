$( document ).ready(function() {
    var arrowBtn = $(".arrows li");
    console.log(arrowBtn);
    var slides = $(".slide");

    arrowBtn.on("click", function() {
    	slides.toggleClass("active");
    });
});
