window.addEventListener('DOMContentLoaded', (e) => {
	console.log('“Let’s get ready to party with jQuery!”');
});

$('artical', 'img').addClass('image-center');

//? Been a minute so just wanted to see if these work //
// $('p').remove(4)
// $('artical', 'p').children().last().remove()
$('article p:last-child').remove();

$('#title').css('font-size', Math.random() * 100);

$('ol').append($('<li>', { text: 'add to list' }));

$('aside').empty().append($('<p>', { text: 'Sorry for existing' }));

//? not sure why its keyup, blur, change? not just change? //
$('.form-control').on('keyup blur change', function () {
	let red = $('.form-control').eq(0).val();
	let blue = $('.form-control').eq(1).val();
	let green = $('.form-control').eq(2).val();
	$('body').css('background-color', 'rgb(' + red + ', ' + green + ', ' + blue + ')');
});

$('img').on('click', function () {
	$(this).remove();
});
