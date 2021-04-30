//API Calls to rawg.io

const button = document.getElementById('submit');
let genres = document.getElementById('genres').value;
let rating = document.getElementById('rating').value;
let platforms = document.getElementById('console').value;
let test = document.querySelector('#test');
let divEl = document.createElement('div');
let divElTwo = document.createElement('div');
divEl.setAttribute('class', 'democlass');

//console.log(genres);

function getGames() {
	fetch(
		`https://api.rawg.io/api/games?key=f4d775e86a54401da676771c802f8d33&ordering=-metacritic&genres=${genres}&platforms=${platforms}&rating=${rating}`
	)
		.then((res) => res.json())
		.then((data) => {
			for (let i = 0; i < data.results.length; i++) {
				let results = data.results[i];
				test.append(divEl);
				divEl.append(results.name);
				for (let p = 0; p < data.results[i].platforms.length; p++) {
					divEl.append(results.platforms[p].platform.name);
				}
			}
		});
}

//ended loop through 2nd platform array need to create

button.addEventListener('click', function (e) {
	e.preventDefault();
	getGames();
});
