


function getGames(){
    fetch ('https://api.rawg.io/api/genres'+ '?key=f4d775e86a54401da676771c802f8d33').then(res=>res.json()).then(data=>console.log(data))
    }
    getGames();
    
    