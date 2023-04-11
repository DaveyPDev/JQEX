let currentId = 0;
let moviesList = [];

$(function() {

$('#new-movie-form').on('submit', function (e) {
	e.preventDefault();
	let title = $('#title').val();
	let rating = $('#rating').val();
	let movieData = { title, rating, currentId };
	const HTMLtoAppend = createMovieData(movieData);
	currentId++;
	moviesList.push(movieData);

	$('#movie-table-body').empty();
	$("#movie-table-body").append(HTMLtoAppend);
	$('new-movie-form').trigger('reset');
	
});

$('tbody').on('click', '.btn.btn-danger', function(e) {
	let indexToRemoveAt = moviesList.findIndex(movie => movie.currentId === +$(e.target).data('deleteId'))
	
	moviesList.splice(indexToRemoveAt, 1)

$(e.target)
	.closest('tr')
	.remove();
})
	
});

function createMovieData(data) {
	return `
	<tr>
		<td>${data.title}</td>
		<td>${data.rating}</td>
		<td>
			<button class='btn btn-danger' data-delete-id=${data.currentId}>
				Delete
			</button>
		</td>
	</tr>
	`;
}