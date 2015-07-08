$(window).ready(function() {
	var hideChapter = true;
	$(".chapter-header").click(function() {
		if (hideChapter == true) {
			$(".chapter-number").css("display","block");
			hideChapter = false;
		} else {
			$(".chapter-number").css("display","none");
			hideChapter = true;
		}
	});
});