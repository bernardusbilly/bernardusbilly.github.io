$(document).ready(function() {
	console.log("BISA.js ready");
	
	var names = $('#photoset-frame > img');

	$(names).each(function() {
		var tmp = $(this).attr('id');
		var name = tmp.substr(0, tmp.indexOf('-'));
		var shift_right = $(this).attr('shift');
		$(this).hover(function() {
			$('#' + name + '-info').css("left", shift_right+"%");
		}, function() {
			$('#' + name + '-info').css("left", "-200%");
		});
	});
});