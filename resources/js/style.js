$(document).ready(function() {
	
	console.log("HTML Ready");

	var top;
	var winWidth;
	var winHeight = $(window).height();
	var headerHeight = $('#header').height();
	var mainHeight = $('#main').height();
	var footerHeight = $('#footer').height();

	if (headerHeight+mainHeight+footerHeight < winHeight) {
		mainHeight = winHeight - headerHeight - footerHeight + 70;
		$('#main').css("min-height", mainHeight);
	}

	$(window).scroll(function() {
		top = $(window).scrollTop();
		winWidth = $(window).width();

		if (top < 40) {
			if (winWidth < 768) {
				$('#name').css("font-size", "16pt");
				$('#name').css("padding", "20px 0 0 0");
				$('.menu').css("padding", "15px 2px");
			} else if (winWidth < 992) {
				$('#name').css("font-size", "18pt");
				$('#name').css("padding", "35px 0");
				$('.menu').css("padding", "40px 10px");
			} else {
				$('#name').css("font-size", "30pt");
				$('#name').css("padding", "20px 0");
				$('.menu').css("padding", "40px 20px");
			}
			$('#header').css("height", "100px");
			$('#main').css("padding-top", "120px");
		} else {
			if (winWidth < 769) {
				$('.menu').css("padding", "5.5px 2px");
				$('#name').css("font-size", "0");
			} else if (winWidth < 992) {
				$('.menu').css("padding", "6px 10px");
				$('#name').css("font-size", "16pt");
			} else {
				$('.menu').css("padding", "6px 20px");
				$('#name').css("font-size", "16pt");
			}
			$('#header').css("height", "32px");
			
			$('#name').css("padding", "0");
			$('#main').css("padding-top", "120px");
			$('#menu-container').css("padding-top", "0");
		}

		if ($(window).scrollTop() + $(window).height() >= $(document).height() - 30) {
			$('#footer .container').css("bottom", "0px");
		} else {
			$('#footer .container').css("bottom", "-100px");
		}
	});

	$(window).resize(function() {

		winWidth = $(window).width();

		if ($('#header').height() > 50) {
			if (winWidth < 768) {
				$('#name').css("font-size", "16pt");
				$('#name').css("padding", "20px 0 0 0");
				$('.menu').css("padding", "15px 2px");
			} else if (winWidth < 992) {
				$('#name').css("font-size", "18pt");
				$('#name').css("padding", "35px 0");
				$('.menu').css("padding", "40px 10px");
			} else {
				$('#name').css("font-size", "30pt");
				$('#name').css("padding", "20px 0");
				$('.menu').css("padding", "40px 20px");
			}
		} else {
			if (winWidth < 769) {
				$('.menu').css("padding", "5.5px 2px");
				$('#name').css("font-size", "0");
			} else if (winWidth < 992) {
				$('.menu').css("padding", "6px 10px");
				$('#name').css("font-size", "16pt");
			} else {
				$('.menu').css("padding", "6px 20px");
				$('#name').css("font-size", "16pt");
			}
			
		}

		if (headerHeight+mainHeight+footerHeight < winHeight) {
			mainHeight = winHeight - headerHeight - footerHeight + 70;
			$('#main').css("min-height", mainHeight);
		}
	});
});