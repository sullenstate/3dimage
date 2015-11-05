$(document).on('ready', function(){

	// Determine image size from viewport dimensions
	var imageSize = Math.floor((Math.min($(window).height(), $(window).width()) * .8) / 10) * 10;

	// Set image size and margin
	$('.atvImg').height(imageSize).width(imageSize).css('margin', imageSize * .1 + 'px auto');

	atvImg();

});