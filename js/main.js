$( document ).ready(function() {

	/* accessibility */
	$(".acessibility-btn").on("click", function() {
		$("h1, .secondary-navigation").toggleClass("accesibility-text-contrast");
		$("html").toggleClass("accessibility-font-size");
	})

	/* banner slider */
	$("body").keydown(function(e) {
	  if(e.keyCode == 37 || e.keyCode == 39) { // left or right
	    $(".arrow-r").click();
	  }
	});

    var arrowBtn = $(".arrows li");
    var slides = $(".slide");

    arrowBtn.on("click", function() {
    	slides.toggleClass("active");
    });

    /* carousel */
    var carouselArrow = $(".carousel-arrow");
    var arrowLeft = $(".carousel-arrow-left");
    var arrowRight = $(".carousel-arrow-right");
    var carousel = $('.carousel ul');
    var isMoving = false;

    carouselArrow.on("click", function() {

    	if(!isMoving) {
	    	var currTrans = carousel.css('transform').split(/[()]/)[1] || carousel.css('-webkit-transform').split(/[()]/)[1] || carousel.css('-ms-transform').split(/[()]/)[1] || carousel.css('-moz-transform').split(/[()]/)[1];
	    	var pos = parseInt(currTrans.split(',')[4]);
	    	if( $(this).hasClass("carousel-arrow-left") ) {
	    		var newPos = pos+240;
	    	} else {
	    		var newPos = pos-240;
	    	}
	    	
	    	console.log(newPos);

	    	if(newPos == 0) {
	    		arrowRight.addClass("hidden");
	    	} else if(newPos > 0 && newPos < 1200) {
	    		arrowRight.removeClass("hidden");
	    		arrowLeft.removeClass("hidden");
	    	} else {
	    		arrowLeft.addClass("hidden");
	    	}

	    	if (newPos > 1200 || newPos < 0) {
	    		return;
	    	} else {
				isMoving = true;
				carousel.animate({ textIndent: 0 }, {
				    step: function() {
				      $(this).css('-moz-transform','translateX('+newPos+'px)');
				      $(this).css('-webkit-transform','translateX('+newPos+'px)');
				      $(this).css('-ms-transform','translateX'+newPos+'px)');
				      $(this).css('transform','translateX('+newPos+'px)');
				    },
				    duration: 300,
				    complete: function(){ isMoving = false }
				});
	    	}
    	}
    })

    /* accordion */
    if (window.location.hash == "#section2") {
        $("#section2").removeClass("closed");
        $("#section2 .accordion-content").slideDown();
    }
    var accordionTitle = $(".accordion-title");
    
    accordionTitle.on("click", function() {
    	var accordion = $(this).closest(".accordion");
    	if(accordion.hasClass("closed")) {
    		accordion.removeClass("closed");
    		accordion.find(".accordion-content").slideDown();
    	} else {
	    	accordion.addClass("closed");
	    	accordion.find(".accordion-content").slideUp();
    	}
    })

});
