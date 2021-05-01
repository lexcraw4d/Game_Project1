//API Calls to rawg.io

const button = document.getElementById('submit');
let genres = document.getElementById('genres').value;
let rating = document.getElementById('rating').value;
let platforms = document.getElementById('console').value;
let test = document.querySelector('#test');
let release = document.querySelector('#release');
let divEl = document.createElement('div');
// let consoleEl =document.createElement('br');

divEl.setAttribute('class', 'democlass');

function getGames() {
	let releaseDatesImp = {
		yesUrl: `https://api.rawg.io/api/games?key=f4d775e86a54401da676771c802f8d33&ordering=-metacritic&genres=${genres}&platforms=${platforms}&rating=${rating}&ordering=-released`,
		noURL: `https://api.rawg.io/api/games?key=f4d775e86a54401da676771c802f8d33&ordering=-metacritic&genres=${genres}&platforms=${platforms}&rating=${rating}`,
	};
	let yesOrNo =
		release.options[release.selectedIndex].value == 'no'
			? releaseDatesImp.noURL
			: releaseDatesImp.yesUrl;
	releaseDateMatters(yesOrNo);
	function releaseDateMatters(usersInput) {
		fetch(usersInput)
			.then((res) => res.json())
			.then((data) => {
				function loopAgain() {
					for (let i = 0; i < data.results.length; i++) {
						let results = data.results[i];
						test.append(divEl);
						divEl.append(results.name);
						divEl.innerHTML += 'Rating:';
						divEl.append(results.rating);
						divEl.innerHTML += '<br>';
						consoleDevice(results);
						background(results);
					}
					function consoleDevice(currentGame) {
						for (let p = 0; p < currentGame.platforms.length; p++) {
							divEl.append(currentGame.platforms[p].platform.name);
							divEl.innerHTML += '<br>';
						}
					}
					function background(image) {
						var img = document.createElement('img');
						img.width = '220';
						img.height = '175';
						img.src = image.background_image;
						divEl.append(img);
						divEl.innerHTML += '<hr>';
					}
				}
				loopAgain();
			});
	}
}

//ended loop through 2nd platform array need to create on HTML telement --- maybe in future dynamically through the DOM

button.addEventListener('click', function (e) {
	e.preventDefault();
	getGames();
});
