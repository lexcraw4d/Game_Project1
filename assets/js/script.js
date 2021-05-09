const button = document.getElementById('submit');
let test = document.querySelector('#test');
let release = document.querySelector('#release');
let divEl = document.createElement('div');
// let favBtn = document.createElement('i');
// let realButton = document.createElement('button');
let favBtn = document.createElement('BUTTON');
$(favBtn).attr('class', 'fa fa-star fa-1x');
$(favBtn).attr('aria-hidden', 'true');

function getData(usersInput) {
	console.log(usersInput);
	fetch(usersInput)
		.then((res) => res.json())
		.then((data) => {
			for (let i = 0; i < 4; i++) {
				let results = data.results[i];
				console.log(results);
				test.append(divEl);
				divEl.append(results.name);
				divEl.innerHTML += '<br>';
				divEl.innerHTML += 'Rating:';
				divEl.append(results.rating);
				divEl.innerHTML += '<br>';
				divEl.dataset.name = results.name;
				consoleDevice(results);
				background(results, i);
				divEl.append(favBtn);
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

	img.width = '300';
	img.height = '175';

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

function youTube(search, j) {
	let platformSearch = $('#console option:selected').text();
	$.ajax({
		url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search}%20tutorial%20${platformSearch}&key=AIzaSyDhBNSQeAeCHnA5px4fulybDjeKJooQKR4`,
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
favBtn.addEventListener('click', function getButton() {
	alert(divEl.dataset.name);
});

//Pseudocode for Local Storage
//when user clicks btn it
//save as 'game' 'actualgamename' ?? --> event.target on click//
//renders to localStorage

//json.stringify setItem()
//parse json to getItem
//if user clicks button push to an array []

//split array or loop and append to a created div
//-lx
