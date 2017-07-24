$(document).ready(function () {
	
	var lights = 'on';

	$('#lightswitch').click(function(){

		if (lights == 'on') {
			$('body').css('background', 'black');
			$('#lightswitch').css('background', 'white');
			$('#lightswitch').css('color', 'black');
			lights = 'off';
			$('#lightswitch').text('OFF');

		} else {
			$('body').css('background', 'white');
			$('#lightswitch').css('background', 'black');
			$('#lightswitch').css('color', 'white');
			lights = 'on';
			$('#lightswitch').text('ON');
		}
		
	});

})




// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;