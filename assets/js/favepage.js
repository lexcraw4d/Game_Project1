function getValue() {
    return localStorage.getItem('Favorite-Games');
  }
  document.getElementById("favorite-list").innerHTML = localStorage.getItem("Favorite-Games");





  let loadFavorites = function () {
    let favoriteList = localStorage.getItem("Favorite-Games");
    if (!favoriteList) {
      return false;
    }
    favorites = JSON.parse(favoriteList);
    console.log(favorites);
  };