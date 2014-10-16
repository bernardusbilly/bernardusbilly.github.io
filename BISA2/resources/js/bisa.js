$(document).ready(function() {
	console.log("BISA.js ready");

	var intro_height = $('#photoset-frame').height();

	$('#intro').css("height",  intro_height);
	
	var names = $('#photoset-frame > img');

	$(names).each(function() {
		var tmp = $(this).attr('id');
		var name = tmp.substr(0, tmp.indexOf('-'));
		var shift_right = $(this).attr('shift');
		$(this).hasClass('photo')

		if($(this).hasClass('photo')) {
			$(this).hover(function() {
				$('#' + name + '-info').css("left", shift_right+"%");
				$('#photoset-info').css("border-left", "3px solid black");
				$('#background').css("opacity", 0);
				$('#background').css("-moz-opacity", 0);
				$('#background').css("-khtml-opacity", 0);
				$('#background-bw').css("opacity", "1");
				$('#background-bw').css("-moz-opacity", 0);
				$('#background-bw').css("-khtml-opacity", 0);
			}, function() {
				$('#' + name + '-info').css("left", "-200%");
				$('#photoset-info').css("border-left", "0px");
				$('#background').css("opacity", "1");
				$('#background').css("-moz-opacity", 1);
				$('#background').css("-khtml-opacity", 1);
				$('#background-bw').css("opacity", 0);
				$('#background-bw').css("-moz-opacity", 0);
				$('#background-bw').css("-khtml-opacity", 0);
			});
		}
	});

	// shorten the Berkeley Indonesian Student Association to BISA when in mobile-version

	if ($(window).width() < 441) {
		$('.navbar-brand').html("BISA");
	} else {
		$('.navbar-brand').html("Berkeley Indonesian Student Association");
	}
		
	$(window).resize(function() {

		intro_height = $('#photoset-frame').height();
		$('#intro').css("height",  intro_height);

		if ($(window).width() < 441) {
			$('.navbar-brand').html("BISA");
		} else {
			$('.navbar-brand').html("Berkeley Indonesian Student Association");
		}
	});
});