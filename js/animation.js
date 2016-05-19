function videoEnded() {
	var upperblock = 0, bottomblock = 0;
		upperblock = $(window).height()/2 - 869;
		bottomblock = $(window).height()/2 - 869;
    var upper_block = $('.upper_block');
    var bottom_block = $('.bottom_block');


		/*$("#bgvid").css({left: '3000px' });*/
		/*if ($("#bgvid".css("left") == "2000px")) { $('#bgvid').remove(); }*/
		/*$('#bgvid').get(0).pause();*/

	/*	$(".upper_block").css({top: upperblock });
		$(".bottom_block").css({bottom: bottomblock });*/

		$(".upper_block").css({top: upperblock });
		upper_block.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
    		function() {
    		/*$(".upper_block").css({top: upperblock + upperblock - 28});*/
    			$('.upper_block').css({
  					height: '869px',
  					top: '-810px'
			});
 		});

		$(".bottom_block").css({bottom: bottomblock });
		bottom_block.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
    		function() {
    			$('.bottom_block').css({
  					height: '869px',
  					bottom: '-810px'
			});
    			$('.navigation').css({
  					bottom: '100px'
			});

    		$('#bgvid').remove();
 		});

}
