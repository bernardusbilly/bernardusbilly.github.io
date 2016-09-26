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

// google analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54848467-1', 'auto');
ga('send', 'pageview');
