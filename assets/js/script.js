// local storage
function saveFavorite() {
    let saveUserData = JSON.parse(localStorage.getItem('')) || [];
    let newSavedData = [{
        //saved user info, favorites
        'genre': document.getElementById("genre").value,
        'console': document.getElementById("console").value,
        'rating': document.getElementById("rating").value,
        'releaseDate': document.getElementById("releaseDate").value,
        'players': document.getElementById("players").value
    }];
    saveUserData.push(newSavedData);
    localStorage.setItem("", JSON.stringify(saveUserData));

    let newSavedData1 = JSON.parse(localStorage.getItem(""))

}






// lexis API javascript

//API Calls to rawg.io

const button = document.getElementById('submit');
let test = document.querySelector('#test');
let release = document.querySelector('#release');
let divEl = document.createElement('div');

function getData(usersInput) {
	console.log(usersInput);
	fetch(usersInput)
		.then((res) => res.json())
		.then((data) => {
			for (let i = 0; i < data.results.length; i++) {
				let results = data.results[i];
				test.append(divEl);
				divEl.append(results.name);
                divEl.innerHTML += '<br>';
				divEl.innerHTML += 'Rating:';
				divEl.append(results.rating);
				divEl.innerHTML += '<br>';
				consoleDevice(results);
				background(results);
			}
		});
}
function consoleDevice(currentGame) {
	for (let p = 0; p < currentGame.platforms.length; p++) {
		divEl.append(currentGame.platforms[p].platform.name);
		divEl.innerHTML += '<br>';
	}
}
function getGames() {
	let genres = document.getElementById('genres').value;
	let rating = document.getElementById('rating').value;
	let platforms = document.getElementById('console').value;
	let releaseDatesImp = {
		yesUrl: `https://api.rawg.io/api/games?key=f4d775e86a54401da676771c802f8d33&ordering=-metacritic&genres=${genres}&platforms=${platforms}&rating=${rating}&ordering=-released`,
		noURL: `https://api.rawg.io/api/games?key=f4d775e86a54401da676771c802f8d33&ordering=-metacritic&genres=${genres}&platforms=${platforms}&rating=${rating}`,
	};
	let userSelection =
		release.options[release.selectedIndex].value == 'no'
			? releaseDatesImp.noURL
			: releaseDatesImp.yesUrl;
	getData(userSelection);
}
function background(image) {
	var img = document.createElement('img');
	img.width = '220';
	img.height = '175';
	if (image.background_image === null) {
		img.src =
			'https://media.moddb.com/cache/images/games/1/43/42826/thumb_620x2000/COMING_SOON.jpg';
	} else img.src = image.background_image;

	divEl.append(img);
	divEl.innerHTML += '<hr>';
}

button.addEventListener('click', function (e) {
	e.preventDefault();
	getGames();
});