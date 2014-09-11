$(document).ready(function() {
	
	console.log("HTML Ready");

	$(window).scroll(function() {
		var top = $(window).scrollTop();
		var winWidth = $(window).width();

		if (top < 40) {
			if (winWidth < 768) {
				$('#name').css("font-size", "16pt");
				$('#name').css("padding", "10pt 0 0 0");
				$('#menu-container').css("padding-top", "9px");
				$('.menu').css("padding", "15px 0px");
			} else if (winWidth < 992) {
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
			if (winWidth < 769) {
				$('.menu').css("padding", "6px 5px");
			} else if (winWidth < 992) {
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

		if ($('#header').height() > 50) {
			if (winWidth < 768) {
				$('#name').css("font-size", "16pt");
				$('#name').css("padding", "10pt 0 0 0");
				$('#menu-container').css("padding-top", "9px");
				$('.menu').css("padding", "15px 0px");
			} else if (winWidth < 992) {
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
			if (winWidth < 769) {
				$('.menu').css("padding", "6px 0px");
			} else if (winWidth < 992) {
				$('.menu').css("padding", "6px 10px");
			} else {
				$('.menu').css("padding", "6px 20px");
			}
		}
	});
});