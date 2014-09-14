$(document).ready(function() {
	
	console.log("HTML Ready");
	var indicator;
	var winWidth;
	var currentWindow = "default";

	$(window).scroll(function() {
		var top = $(window).scrollTop();
		indicator = $('#name').width();
		winWidth = $(window).width();
		if (indicator == 448) {
			currentWindow = "lg";
		} else if (indicator == 485) {
			currentWindow = "md";
		} else if (indicator == 313); {
			currentWindow = "sm";
		} else {
			currentWindow = "xs";
		}

		if (top < 40) {
			if (currentWindow == "xs") {
				$('#name').css("font-size", "16pt");
				$('#name').css("padding", "10pt 0 0 0");
				$('#menu-container').css("padding-top", "9px");
				$('.menu').css("padding", "15px 2px");
			} else if (currentWindow == "md") {
				$('#name').css("font-size", "18pt");
				$('#name').css("padding", "35px 0");
				$('#menu-container').css("padding-top", "25px");
				$('.menu').css("padding", "15px 10px");
			} else {
				$('#name').css("font-size", "30pt");
				$('#name').css("padding", "20px 0");
				$('#menu-container').css("padding-top", "25px");
				$('.menu').css("padding", "15px 20px");
			}
			$('#name').removeClass("hidden-xs");
			$('#header-bg').css("height", "100px");
			$('#main').css("padding-top", "120px");
		} else {
			if (currentWindow == "xs") {
				$('.menu').css("padding", "6px 2px");
			} else if (currentWindow == "md") {
				$('.menu').css("padding", "6px 10px");
			} else {
				$('.menu').css("padding", "6px 20px");
			}
			$('#name').addClass("hidden-xs");
			$('#header-bg').css("height", "30px");
			$('#name').css("font-size", "12pt");
			$('#name').css("padding", "5px 0");
			$('#main').css("padding-top", "120px");
			$('#menu-container').css("padding-top", "0");
		}
	});

	$(window).resize(function() {
		winWidth = $(window).width();
		indicator = $('#name').width();

		if ($('#header').height() > 50) {
			if (currentWindow == "xs") {
				$('#name').css("font-size", "16pt");
				$('#name').css("padding", "10pt 0 0 0");
				$('#menu-container').css("padding-top", "9px");
				$('.menu').css("padding", "15px 2px");
			} else if (currentWindow == "md") {
				$('#name').css("font-size", "18pt");
				$('#name').css("padding", "35px 0");
				$('#menu-container').css("padding-top", "25px");
				$('.menu').css("padding", "15px 10px");
			} else {
				$('#name').css("font-size", "30pt");
				$('#name').css("padding", "20px 0");
				$('#menu-container').css("padding-top", "25px");
				$('.menu').css("padding", "15px 20px");
			}
		} else {
			if (currentWindow == "xs") {
				$('.menu').css("padding", "6px 2px");
			} else if (currentWindow == "md") {
				$('.menu').css("padding", "6px 10px");
			} else {
				$('.menu').css("padding", "6px 20px");
			}
		}
	});
});