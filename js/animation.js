function videoEnded() {

		$("#bgvid").css({left: '3000px' });
		/*if ($("#bgvid".css("left") == "2000px")) { $('#bgvid').remove(); }*/
		$('#bgvid').get(0).pause();
		$(".upper_block").css({top: '0' });
		$(".bottom_block").css({bottom: '0' });

}
