var asd = 1;// Js para aparecer el texto letra por letra
var showText = function (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}  

var loadmodal = function (sec) {
    $('#modal-container-').load('modal.txt #'+sec);

}

//jQuery to collapse the navbar on scroll
/*$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}); */

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// cambio de icono en menu
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {

        
        $('a').each(function () {
            $(this).children().removeClass('fa-circle');
						$(this).children().addClass('fa-circle-o');
        })
        $(this).children().addClass('fa-circle');
      	$(this).children().removeClass('fa-circle-o');
    });
});

function onScroll(event){
	
	if(asd) {
		showText("#escribiendo", "EXPERIENCIA EN MEDIOS LOCALES", 0, 100);
		asd = 0;
	}
	
    var scrollPos = $(document).scrollTop();
    $('a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('ul li a').children().removeClass("fa-circle");
						
            currLink.children().addClass("fa-circle");
        }
        else{
            currLink.children().removeClass("fa-circle");
        }
    });
}


$(document).on('mousewheel DOMMouseScroll', function(event) {
// autoscroll con mouse-wheel
	var delay = false;
	event.preventDefault();
	if(delay) return;

	delay = true;
	setTimeout(function(){delay = false},200)

	var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

	var a= document.getElementsByTagName('section');
	if(wd < 0) {
		for(var i = 0 ; i < a.length ; i++) {
			var t = a[i].getClientRects()[0].top;
			if(t >= 20) break;
		}
	}
	else {
		for(var i = a.length-1 ; i >= 0 ; i--) {
			var t = a[i].getClientRects()[0].top;
			if(t < -20) break;
		}
	}
	$('html,body').animate({
		scrollTop: a[i].offsetTop
	});
	
	// cambio de color con scroll
	// pendiente
});