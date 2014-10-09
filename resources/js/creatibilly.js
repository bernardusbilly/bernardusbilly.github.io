/* creatibilly.js */
$(document).ready(function(){
	console.log("Creatibilly.js Ready");

	$('.img-compound').ready(function() {
		var height = 0
		var number = 0;
		border_height = $('.img-compound > img').height();
		border_width = $('.img-compound > img').width();

		console.log(border_height);
		console.log(border_width);

		$('.img-compound').css("height", border_height);
		$('.img-compound').css("width", border_width);

		$('.img-compound > img').each(function() {
			$(this).attr("number", number);
			$(this).css("top", -height);
			height = height + $(this).height();
			// console.log((new Date).getSeconds() + 60*(new Date).getMinutes());
			number += 1;
		});
	});

});