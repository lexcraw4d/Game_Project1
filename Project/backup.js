const button = document.getElementById('submit');
let test = document.querySelector('#test');
let release = document.querySelector('#release');
let divEl = document.createElement('div');
// let videoEl = document.getElementById('videoEl');

function getData(usersInput) {
	console.log(usersInput);
	fetch(usersInput)
		.then((res) => res.json())
		.then((data) => {
			for (let i = 0; i < data.results.length; i++) {
				let results = data.results[i];
				console.log(results);
				test.append(divEl);
				divEl.append(results.name);
				divEl.innerHTML += '<br>';
				divEl.innerHTML += 'Rating:';
				divEl.append(results.rating);
				divEl.innerHTML += '<br>';
				consoleDevice(results);
				background(results, i);
				youTube(results.name, i); //name
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
function background(image, j) {
	var img = document.createElement('img');
	var imgdiv = document.createElement('div');

	img.width = '220';
	img.height = '175';
	img.style = 'margin-left: 6em;';
	if (image.background_image === null) {
		img.src =
			'https://media.moddb.com/cache/images/games/1/43/42826/thumb_620x2000/COMING_SOON.jpg';
	} else img.src = image.background_image;
	imgdiv.append(img);

	divEl.append(imgdiv);

	var div = document.createElement('div');
	div.id = 'div' + j;
	div.style = 'text-align: center;';
	divEl.append(div);
	divEl.innerHTML += '<hr>';
}
// function wikiSearch (searchName){
// fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${searchName}&limit=5`).then(function(resp) {
//     console.log(resp);
//     return resp.json()
// }).then(function(data) {
//     console.log(data);
// })
// }
function youTube(search, j) {
	let platformSearch = $('#console option:selected').text();
	$.ajax({
		url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search}%20tutorial%20${platformSearch}&key=AIzaSyAKper3Da_Jg9MYyx5aRwOwwz1bN-OgByU`,
		type: 'GET',
		dataType: 'jsonp',
		cache: false,
		success: function (response) {
			var data = response;

			if (response.items.length > 0) {
				let videoId = data.items[0].id.videoId;
				$('<iframe>', { src: 'https://www.youtube.com/embed/' + videoId }).appendTo($('#div' + j));
				console.log(videoId + 'HERE IS VIDEO ID');
			}
		},
	});

	// // document.getElementById('console').text();
	// fetch(
	// 	`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=fortnite%20tutorial%20ps4&key=AIzaSyAyX6mNT5_rCoSyPnqIPljCmoAv0b2Pyf8`
	// )
	// 	//
	// 	// https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=fortnite%20tutorial%20ps4&key=AIzaSyAyX6mNT5_rCoSyPnqIPljCmoAv0b2Pyf8`
	// 	//.then((res) => res.json())
	// 	.then((data) => {
	// 		for (let i = 11; i < 11; i++) {

	// 		}
	// 	});
}

button.addEventListener('click', function (e) {
	e.preventDefault();
	getGames();
});
