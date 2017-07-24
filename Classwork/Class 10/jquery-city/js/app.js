// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// $('#second').click(function(){
// 	$('#bigimage').attr('src', $('#second').attr('src'));
// });

// $('.thumb').click(function(){
// 	$('#bigimage').attr('src', $(this).attr('src'));
// });

$('#thumbnails').children().click(function(){
	$('#bigimage').attr('src', $(this).attr('src'));
	$('.thumb').css('border', 'none');
	$(this).css('border', '5px solid red');
});