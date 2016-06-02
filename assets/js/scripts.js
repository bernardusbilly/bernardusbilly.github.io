$(window).load(function() {
	$('.loading-wrapper').hide();
	$('.menu-container').addClass("animated fadeInRight");
  $('.logo').animate({
      width: "250px"
  }, 800, "easeOutBounce");
});

$('.wrapper-project').hover(function() {
	$(this).find(".project-preview").css("opacity", "1");
}, function() {
	$(this).find(".project-preview").css("opacity", "0");
})

$("ul>li>a").click(function(e) {
	var target = $(this).attr("href");
	e.preventDefault();
	console.log(target);
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000, 'easeInOutQuint');
});

var service = $('.services').waypoint({
  handler: function() {
  	$('.services li').css("visibility", "visible");
    $('.services li').addClass("animated fadeInRight");
  },
  offset: "70%"
})

var yearIndicator = $('.year-indicator').waypoint({
  handler: function(direction) {
  	$(this.element).css("visibility", "visible");
    $(this.element).addClass("animated fadeInDown");
  },
  offset: "70%"
})

var leftHistory = $('.wrapper-left').waypoint({
  handler: function(direction) {
  	$(this.element).css("visibility", "visible");
    $(this.element).addClass("animated fadeInLeft");
  },
  offset: "70%"
})

var rightHistory = $('.wrapper-right').waypoint({
  handler: function(direction) {
  	$(this.element).css("visibility", "visible");
    $(this.element).addClass("animated fadeInRight");
  },
  offset: "70%"
})

var projectHeader = $('.wrapper-project .project-header').waypoint({
  handler: function(direction) {
  	$(this.element).css("visibility", "visible");
    $(this.element).addClass("animated fadeInLeft");
    $(this.element).next().css("visibility", "visible");
    $(this.element).next().addClass("animated fadeInLeft");
  },
  offset: "90%"
})