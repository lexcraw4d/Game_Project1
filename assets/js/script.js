//API Calls to rawg.io

const button = document.getElementById('submit');
let genres = document.getElementById('genres').value;
let rating = document.getElementById('rating').value;
let platforms = document.getElementById('console').value;
let test = document.querySelector('#test');
let divEl = document.createElement('div');
// let consoleEl =document.createElement('br');

divEl.setAttribute('class', 'democlass');

//console.log(genres);

function getGames() {
	fetch(
		`https://api.rawg.io/api/games?key=f4d775e86a54401da676771c802f8d33&ordering=-metacritic&genres=${genres}&platforms=${platforms}&rating=${rating}`
	)
		.then((res) => res.json())
		.then((data) => {
			function loopAgain() {for (let i = 0; i < data.results.length; i++) {
				let results = data.results[i];
				test.append(divEl);
				divEl.append(results.name)
                divEl.innerHTML += '<br>'
                consoleDevice(results)
                background(results)
            }
            function consoleDevice(currentGame){
				for (let p = 0; p < currentGame.platforms.length; p++) {
                    divEl.append(currentGame.platforms[p].platform.name);
                    divEl.innerHTML += '<br>'
				}
            }
            // function background(image){
            //     for (let b=0; b<image.length; b++){
            //         var images = document.createElement('img');
            //         images.setAttribute('src',image.background_image)
            //         divEl.append(images)
            //     }
            function background(image) {
                var img = document.createElement('img');
                img.width = "220"
                img.height = "175"
                img.src = image.background_image;
                divEl.append(img);
                divEl.innerHTML += '<hr>'
            } 
            
        }
            loopAgain()
		});
}

//ended loop through 2nd platform array need to create on HTML telement --- maybe in future dynamically through the DOM

button.addEventListener('click', function (e) {
	e.preventDefault();
	getGames();
});
