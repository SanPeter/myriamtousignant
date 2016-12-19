//jQuery scripts for the Oil and Sugar theme
jQuery(function ($) {
$(document).ready(function(){ 
 
        $(window).scroll(function(){
            if ($(this).scrollTop() > 250) {
                 $(".scroll-top").fadeIn(400);
            } else {
                 $(".scroll-top").fadeOut(400);
            }
        }); 
 
         $("a[href=#scroll-up]").click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });


	var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com']")

	$allVideos.each(function() {
	$(this).removeAttr('width');
	$(this).removeAttr('height');
	});

  	$allVideos.each(function() {
	$(this).attr('width', '100%');
	$(this).attr('height', '550px');
	});


$('.slide').hover(
	
	function() {
  		$(this).find('div.snipit').animate({
			opacity: 1,
			height: $('.thumbnail_home').find('img').height()
		}, 400 ); 
	}, 
	function() {
      		$(this).find('div.snipit').animate({
			opacity: 0,
			height: "0px"
		}, 400);
	}
);

$('.btn-navbar').click(function(){
$('.collapse').toggle();
});


var $rotator = $(".fadein");
$rotator.find("img:gt(0)").hide();
setTimeout(Rotate, 5000);

function Rotate() {
    var $current = $rotator.find("img:visible");
    var $next = $current.next();
    if ($next.length == 0) $next = $rotator.find("img:eq(0)");
    $current.fadeOut(500);
    $next.fadeIn(500);
    setTimeout(Rotate, 5000);
}
 
});
});