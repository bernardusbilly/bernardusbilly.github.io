$(document).ready(function() {
	
	console.log("HTML Ready");

	var top;
	var winWidth;
	var winHeight = $(window).height();
	var headerHeight = $('#header').height();
	var mainHeight = $('#main').height();
	var footerHeight = $('#footer').height();

	if (headerHeight+mainHeight+footerHeight < winHeight) {
		mainHeight = winHeight - headerHeight - footerHeight + 50;
		$('#main').css("min-height", mainHeight);
	}

	$(window).scroll(function() {
		top = $(window).scrollTop();
		winWidth = $(window).width();

		if (top < 40) {
			if (winWidth < 768) {
				$('#name').css("font-size", "15pt");
				$('#name').css("padding", "10pt 0 0 0");
				$('#menu-container').css("padding-top", "9px");
				$('.menu').css("padding", "15px 2px");
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
			$('#header').css("height", "100px");
			$('#main').css("padding-top", "120px");
		} else {
			if (winWidth < 769) {
				$('.menu').css("padding", "6px 2px");
			} else if (winWidth < 992) {
				$('.menu').css("padding", "6px 10px");
			} else {
				$('.menu').css("padding", "6px 20px");
			}
			$('#name').addClass("hidden-xs");
			$('#header').css("height", "32px");
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
				$('#name').css("font-size", "15pt");
				$('#name').css("padding", "10pt 0 0 0");
				$('#menu-container').css("padding-top", "9px");
				$('.menu').css("padding", "15px 2px");
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
				$('.menu').css("padding", "6px 2px");
			} else if (winWidth < 992) {
				$('.menu').css("padding", "6px 10px");
			} else {
				$('.menu').css("padding", "6px 20px");
			}
		}

		if (headerHeight+mainHeight+footerHeight < winHeight) {
			mainHeight = winHeight - headerHeight - footerHeight + 50;
			$('#main').css("min-height", mainHeight);
		}
	});
});