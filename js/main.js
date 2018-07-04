$(function() {
	$('[data-tab]').click(function() {
		var target = $(this).attr('data-tab');
		console.log(target);
		$('.tab-container .tab').removeClass('active');
		$(this).addClass('active');
		$('.tab-container .content').removeClass('active');
		$('.tab-container .content' + target).addClass('active');
	});

});