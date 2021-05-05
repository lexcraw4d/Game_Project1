// ----list to do----
// create a add event listener to submit button
// have submit button save to localstorage what user picked
// have a function to save to favorite to localstorage
// create ability for user to access favorites.







// local storage save favorite
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
    localStorage.setItem("results", JSON.stringify(saveUserData));

    let newSavedData1 = JSON.parse(localStorage.getItem("result"))
}


// localstorage function 
$(document).ready(function() {
    $("#select-box").change(function() {
        localStorage.setItem('genre', $(this).val());
        $('#select-box').value(localStorage.getItem('genre'));
    });
});



// genre storage
if (localStorage.getItem('genre') === null) {
    localStorage.setItem('genre', "action");
    document.write("action");
} else {
    if (localStorage.getItem('genre') === "action") {
        document.write("Action");
    } else if (localStorage.getItem('genre') === "strategy") {
        document.write("Strategy");
    } else if (localStorage.getItem('genre') === "sports") {
        document.write("Sports");
    } else if (localStorage.getItem('genre') === "rpg") {
        document.write("RPG");
    } else if (localStorage.getItem('genre') === "adventure") {
        document.write("Adventure");
    } 
    // add more if we have more selections
    // else if (localStorage.getItem('genre') === "---") {
    //     document.write("fillout");
    // } else if (localStorage.getItem('genre') === "---") {
    //     document.write("fillout");
    // } else if (localStorage.getItem('genre') === "---") {
    //     document.write("fillout");
    // } else if (localStorage.getItem('genre') === "---") {
    //     document.write("fillout");
    // } else if (localStorage.getItem('genre') === "---") {
    //     document.write("fillout");
    // } 
};

//console storage

if (localStorage.getItem('console') === null) {
    localStorage.setItem('console', "4,6");
    document.write("PC,Web,Linux");
} else {
    if (localStorage.getItem('console') === "4,6") {
        document.write("PC,Web,Linux");
    } else if (localStorage.getItem('console') === "4,6") {
        document.write("PC,Web,Linux");
    } else if (localStorage.getItem('console') === "21,5") {
        document.write("macOS, Android");
    } else if (localStorage.getItem('console') === "2") {
        document.write("Playstation");
    } else if (localStorage.getItem('console') === "15") {
        document.write("Playstation 2");
    } else if (localStorage.getItem('console') === "3") {
        document.write("Playstation 3");
    } else if (localStorage.getItem('console') === "4") {
        document.write("Playstation 4");
    } else if (localStorage.getItem('console') === "187") {
        document.write("Playstation 5");
    } else if (localStorage.getItem('console') === "7") {
        document.write("Nintendo Switch/Nintendo");
    } else if (localStorage.getItem('console') === "10,11") {
        document.write("Wii/Wii U");
    } else if (localStorage.getItem('console') === "3") {
        document.write("Xbox");
    } else if (localStorage.getItem('console') === "1") {
        document.write("Xbox One");
    } else if (localStorage.getItem('console') === "186") {
        document.write("Xbox Series S/X");
    } 
};


//rating storage

if (localStorage.getItem('rating') === null) {
    localStorage.setItem('rating', "everyone");
    document.write("Everyone");
} else {
    if (localStorage.getItem('rating') === "everyone") {
        document.write("Everyone");
    } else if (localStorage.getItem('rating') === "teen") {
        document.write("Teen");
    } else if (localStorage.getItem('rating') === "mature") {
        document.write("Mature");
    }
};

//release date storage
if (localStorage.getItem('release') === null) {
    localStorage.setItem('release', "yes");
    document.write("yes");
} else {
    if (localStorage.getItem('release') === "yes") {
        document.write("Yes");
    } else if (localStorage.getItem('release') === "no") {
        document.write("No");
    }
};







// lexis API javascript

//API Calls to rawg.io

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
		url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search}%20tutorial%20${platformSearch}&key=AIzaSyDhBNSQeAeCHnA5px4fulybDjeKJooQKR4`,
		type: 'GET',
		dataType: 'jsonp',
		cache: false,
		success: function (response) {
			var data = response;

			if (data.items.length > 0) {
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