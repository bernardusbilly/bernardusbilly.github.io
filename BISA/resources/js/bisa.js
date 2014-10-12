$(document).ready(function() {
	console.log("BISA.js ready");
	
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
			}, function() {
				$('#' + name + '-info').css("left", "-200%");
				$('#photoset-info').css("border-left", "0px");
			});
		}
	});

	// shorten the Berkeley Indonesian Student Association to BISA when in mobile-version

	if ($(window).width() < 441) {
		$('#header .navbar-brand').html("BISA");
	} else {
		$('#header .navbar-brand').html("Berkeley Indonesian Student Association");
	}
		
	$(window).resize(function() {
		if ($(window).width() < 441) {
			$('#header .navbar-brand').html("BISA");
		} else {
			$('#header .navbar-brand').html("Berkeley Indonesian Student Association");
		}
	});
});