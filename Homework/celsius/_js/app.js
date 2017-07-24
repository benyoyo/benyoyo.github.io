$('#button').click(function(){

var yourAge = $('#age').val();
var howOld = $('#max-age').val();
var howMany = $('#num-per-day').val();
var numDrinks = ((howOld - yourAge) * 365 * howMany);
var favDrink = $('#item').val();

$('#solution').html(numDrinks);
$('#drink').html(favDrink);

});