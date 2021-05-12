const button = document.getElementById('submit');
let test = document.querySelector('#test');
let release = document.querySelector('#release');

function getData(usersInput) {
	console.log(usersInput);
	fetch(usersInput)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			for (let i = 0; i < 5; i++) {
				let divEl = document.createElement('div');
				let gameTitle = document.createElement('div');
				let results = data.results[i];
				divEl.id = results.name;
				test.append(divEl);
				gameTitle.append(results.name);
				divEl.append(gameTitle);
				addFavBtn(divEl);
				divEl.innerHTML += '<br>';
				divEl.innerHTML += 'Rating:';
				divEl.append(results.rating);
				divEl.innerHTML += '<br>';
				gameTitle.setAttribute('id', results.name);
				divEl.dataset.name = results.name;
				consoleDevice(divEl, results);
				background(divEl, results, i);
				youTube(results.name, i); //name
			}
		});
}
function consoleDevice(parentEl, currentGame) {
	for (let p = 0; p < currentGame.platforms.length; p++) {
		parentEl.append(currentGame.platforms[p].platform.name);
		parentEl.innerHTML += '<br>';
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
function background(parentEl, image, j) {
	var img = document.createElement('img');
	var imgdiv = document.createElement('div');

	img.width = '300';
	img.height = '175';
	img.style = 'text-align:center';

	if (image.background_image === null) {
		img.src =
			'https://media.moddb.com/cache/images/games/1/43/42826/thumb_620x2000/COMING_SOON.jpg';
	} else img.src = image.background_image;
	imgdiv.append(img);

	parentEl.append(imgdiv);

	var div = document.createElement('div');
	div.id = 'div' + j;
	div.style = 'text-align: center;';
	parentEl.append(div);
	parentEl.innerHTML += '<hr>';
}

function youTube(search, j) {
	let platformSearch = $('#console option:selected').text();
	$.ajax({
		url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search}%20tutorial%20${platformSearch}&key=AIzaSyDBWLEbuOJ78Ps5jjz0N1EcqD_Jw4hP-2s`,
		type: 'GET',
		dataType: 'jsonp',
		cache: false,
		success: function (response) {
			var data = response;
			//this adds to give back ALL youTube data associated with it
			// if (data.items.length > ) {
			let videoId = data.items[0].id.videoId;
			$('<iframe>', { src: 'https://www.youtube.com/embed/' + videoId }).appendTo($('#div' + j));
			console.log(videoId + 'HERE IS VIDEO ID');
			// }
		},
	});
}

button.addEventListener('click', function (e) {
	e.preventDefault();
	getGames();
});

//*added for data localStorage purposes */
function addFavBtn(parentEl) {
	// let addFav = "Add to Favorites"
	// let removeFav = "Remove"
	const newBtn = document.createElement('button');
	$(newBtn).attr('class', 'fa fa-star fa-1x');
	$(newBtn).attr('aria-hidden', 'true');
	parentEl.append(newBtn);
	$(parentEl).on('click', newBtn, function () {
		const gameName = $(parentEl).attr('id');
		let favGames = JSON.parse(localStorage.getItem('Favorite Games')) || [];
		console.log(favGames);
		const found = favGames.find((name) => {
			return name === gameName;
		});

		if (found) {
			favGames = favGames.filter((name) => {
				return name !== gameName;
			});
		} else {
			favGames.push(gameName);
		}

		localStorage.setItem('Favorite Games', JSON.stringify(favGames));
	});
}
