//API Calls to rawg.io

const button = document.getElementById('submit');
let genres = document.getElementById('genres').value;
let rating = document.getElementById('rating').value;
let platforms = document.getElementById('console').value;
let test = document.querySelector('#test');

//console.log(genres);

function getGames() {
	fetch(
		`https://api.rawg.io/api/games?key=f4d775e86a54401da676771c802f8d33&ordering=-metacritic&genres=${genres}&platforms=${platforms}&rating=${rating}`
	)
		.then((res) => res.json())
		.then((data) => {
        for (let i=0; i<data.results.length; i++){
            let divEl = document.createElement("div");
            test.append(divEl);
            divEl.append(data.results[i].name)
        }
    })}
        


button.addEventListener('click', function (e) {
	e.preventDefault();
	getGames();
})