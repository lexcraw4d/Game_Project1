/* eslint-disable no-undef */
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
			//results.data.length an option, but takes up all of API YouTube key
			for (let i = 0; i < 5; i++) {
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
//Passes in results at each index and loops within those results to retrieve the consoles for each game
function consoleDevice(currentGame) {
	for (let p = 0; p < currentGame.platforms.length; p++) {
		divEl.append(currentGame.platforms[p].platform.name);
		divEl.innerHTML += '<br>';
	}
}
//initial call when the submit button is clicked gathers all the information based off the user's input values
function getGames() {
	let genres = document.getElementById('genres').value;
	let rating = document.getElementById('rating').value;
	let platforms = document.getElementById('console').value;
	//if release date is of importance, appends that portion to the url for the fetch fx to call
	let releaseDatesImp = {
		yesUrl: `https://api.rawg.io/api/games?key=f4d775e86a54401da676771c802f8d33&ordering=-metacritic&genres=${genres}&platforms=${platforms}&rating=${rating}&ordering=-released`,
		noURL: `https://api.rawg.io/api/games?key=f4d775e86a54401da676771c802f8d33&ordering=-metacritic&genres=${genres}&platforms=${platforms}&rating=${rating}`,
	};
	let userSelection =
		release.options[release.selectedIndex].value == 'no'
			? releaseDatesImp.noURL
			: releaseDatesImp.yesUrl;
	//pass through the user's choice for fetch to know which url to call
	getData(userSelection);
}
//passes through the image from Rawg.io at each index [j] - creates img
function background(image, j) {
	var img = document.createElement('img');
	var imgdiv = document.createElement('div');

	img.width = '300';
	img.height = '150';
	img.style = 'text-align:center';
	//no image response -> default img
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
//fetches YouTube API and appends results 
function youTube(search, j) {
	let platformSearch = $('#console option:selected').text();
	$.ajax({
		url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search}%20tutorial%20${platformSearch}&key=AIzaSyAajmBQDCqMUw-mID27rjfW-UXUYq8HTUs`,
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


}

button.addEventListener('click', function (e) {
	e.preventDefault();
	getGames();
});
