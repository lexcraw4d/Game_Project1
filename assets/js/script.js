//API Calls to rawg.io
let genres = $("#genres :selected").val();
let platforms = $("#console :selected").val();
let rating = $("#rating :selected").val();




function getGames(){
    fetch (`https://api.rawg.io/api/games?key=f4d775e86a54401da676771c802f8d33&ordering=-metacritic&genres=${genres}&platforms=${platforms}&rating=${rating}`).then(res=>res.json()).then(data=>console.log(data))
    }
    getGames();


  //To Do: Learn PHP to self call to return variables
