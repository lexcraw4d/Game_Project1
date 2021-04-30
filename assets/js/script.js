//API Calls to rawg.io

const button = document.getElementById('submit');
button.addEventListener('click', function (e) {
	let genres = document.getElementById('genres').value;
	let rating = document.getElementById('rating').value;
	let platforms = document.getElementById('console').value;
	//console.log(genres);
    let 
	fetch(
		`https://api.rawg.io/api/games?key=f4d775e86a54401da676771c802f8d33&ordering=-metacritic&genres=${genres}&platforms=${platforms}&rating=${rating}`
	)
		.then((res) => res.json())
		.then((data) => console.log(data));
});
