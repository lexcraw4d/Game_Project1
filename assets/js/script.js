// selecting IDs from HTML
let genreSel = document.getElementById("genre");
let consoleSel = document.getElementById("console");
let ratingSel = document.getElementById("rating");
let releaseSel = document.getElementById("releaseDate");
let playerSel = document.getElementById("players");

// list of genre objects in an Array
let genreObj = {
  RPG: {
    "TEST": ["object1", "object2", "object3", "object4"],
    "TEST1": ["object1", "object2", "object3", "object4"],
    "TEST2": ["object1", "object2", "object3", "object4"],
  },
  Strategy: {
    "TEST3": ["object1", "object2", "object3", "object4"],
    "TEST4": ["object1", "object2", "object3", "object4"],
    "TEST5": ["object1", "object2", "object3", "object4"],
  },
  Shooters: {
    "TEST6": ["object1", "object2", "object3", "object4"],
    "TEST7": ["object1", "object2", "object3", "object4"],
    "TEST8": ["object1", "object2", "object3", "object4"],
  },
  Action: {
    "0": ["object1", "object2", "object3", "object4"],
    "1": ["object1", "object2", "object3", "object4"],
    "2": ["object1", "object2", "object3", "object4"],
  },
  MOBA: {
    "3": ["object1", "object2", "object3", "object4"],
    "4": ["object1", "object2", "object3", "object4"],
    "5": ["object1", "object2", "object3", "object4"],
  },
  MMORPG: {
    "6": ["object1", "object2", "object3", "object4"],
    "7": ["object1", "object2", "object3", "object4"],
    "8": ["object1", "object2", "object3", "object4"],
  },
  Sandbox: {
    "9": ["object1", "object2", "object3", "object4"],
    "10": ["object1", "object2", "object3", "object4"],
    "11": ["object1", "object2", "object3", "object4"],
  },
  Puzzles: {
    "12": ["object1", "object2", "object3", "object4"],
    "13": ["object1", "object2", "object3", "object4"],
    "14": ["object1", "object2", "object3", "object4"],
  },
  Adventure: {
    "15": ["object1", "object2", "object3", "object4"],
    "16": ["object1", "object2", "object3", "object4"],
    "17": ["object1", "object2", "object3", "object4"],
  },
  Survival: {
    "18": ["object1", "object2", "object3", "object4"],
    "19": ["object1", "object2", "object3", "object4"],
    "20": ["object1", "object2", "object3", "object4"],
  },
  Platformer: {
    "21": ["object1", "object2", "object3", "object4"],
    "22": ["object1", "object2", "object3", "object4"],
    "23": ["object1", "object2", "object3", "object4"],
  },
  "Battle Royal": {
    "24": ["object1", "object2", "object3", "object4"],
    "25": ["object1", "object2", "object3", "object4"],
    "26": ["object1", "object2", "object3", "object4"],
  },
  Sports: {
    "27": ["object1", "object2", "object3", "object4"],
    "28": ["object1", "object2", "object3", "object4"],
    "29": ["object1", "object2", "object3", "object4"],
  },
  MMO: {
    "30": ["object1", "object2", "object3", "object4"],
    "31": ["object1", "object2", "object3", "object4"],
    "32": ["object1", "object2", "object3", "object4"],
  },
  Simulation: {
    "33": ["object1", "object2", "object3", "object4"],
    "34": ["object1", "object2", "object3", "object4"],
    "35": ["object1", "object2", "object3", "object4"],
  },
};

//list of consoles Array
let consuleType = {
  PC: {
    "36": ["object1", "object2", "object3", "object4"],
    "37": ["object1", "object2", "object3", "object4"],
    "38": ["object1", "object2", "object3", "object4"],
  },
  PS4: {
    "39": ["object1", "object2", "object3", "object4"],
    "40": ["object1", "object2", "object3", "object4"],
    "41": ["object1", "object2", "object3", "object4"],
  },
  PS5: {
    "42": ["object1", "object2", "object3", "object4"],
    "43": ["object1", "object2", "object3", "object4"],
    "44": ["object1", "object2", "object3", "object4"],
  },
  Switch: {
    "45": ["object1", "object2", "object3", "object4"],
    "46": ["object1", "object2", "object3", "object4"],
    "47": ["object1", "object2", "object3", "object4"],
  },
  XBOX: {
    "48": ["object1", "object2", "object3", "object4"],
    "49": ["object1", "object2", "object3", "object4"],
    "50": ["object1", "object2", "object3", "object4"],
  },
  IOS: {
    "51": ["object1", "object2", "object3", "object4"],
    "52": ["object1", "object2", "object3", "object4"],
    "53": ["object1", "object2", "object3", "object4"],
  },
  Andriod: {
    "54": ["object1", "object2", "object3", "object4"],
    "55": ["object1", "object2", "object3", "object4"],
    "56": ["object1", "object2", "object3", "object4"],
  },
};

// list of ratings Array

let ratingObj = {
  "Early Childhood": {
    "57": ["object1", "object2", "object3", "object4"],
    "58": ["object1", "object2", "object3", "object4"],
    "59": ["object1", "object2", "object3", "object4"],
  },
  Everyone: {
    "60": ["object1", "object2", "object3", "object4"],
    "61": ["object1", "object2", "object3", "object4"],
    "62": ["object1", "object2", "object3", "object4"],
  },
  Teen: {
    "63": ["object1", "object2", "object3", "object4"],
    "64": ["object1", "object2", "object3", "object4"],
    "65": ["object1", "object2", "object3", "object4"],
  },
  Mature: {
    "66": ["object1", "object2", "object3", "object4"],
    "67": ["object1", "object2", "object3", "object4"],
    "68": ["object1", "object2", "object3", "object4"],
  },
  Adult: {
    "69": ["object1", "object2", "object3", "object4"],
    "70": ["object1", "object2", "object3", "object4"],
    "71": ["object1", "object2", "object3", "object4"],
  },
};

// list of release date
let relSelect = {
  Yes: {
    "72": ["object1", "object2", "object3", "object4"],
    "73": ["object1", "object2", "object3", "object4"],
    "74": ["object1", "object2", "object3", "object4"],
  },
  No: {
    "75": ["object1", "object2", "object3", "object4"],
    "76": ["object1", "object2", "object3", "object4"],
    "77": ["object1", "object2", "object3", "object4"],
  },
};

//single player or multiplayer
let singMultiPlayer = {
  Single: {
    "78": ["object1", "object2", "object3", "object4"],
    "79": ["object1", "object2", "object3", "object4"],
    "80": ["object1", "object2", "object3", "object4"],
  },
  Multiplayer: {
    "81": ["object1", "object2", "object3", "object4"],
    "82": ["object1", "object2", "object3", "object4"],
    "83": ["object1", "object2", "object3", "object4"],
  },
  Both: {
    "84": ["object1", "object2", "object3", "object4"],
    "85": ["object1", "object2", "object3", "object4"],
    "86": ["object1", "object2", "object3", "object4"],
  },
};

// select function
window.onload = function () {
  for (let x in genreObj) {
    genreSel.options[genreSel.options.length] = new Option(x, x);
  }
  genreSel.onchange = function () {
    consoleSel.length = 1;
    ratingSel.length = 1;
    relSelect.length = 1;
    singMultiPlayer.length = 1;
    for (let y in consoleSel[this.value]) {
      consoleSel.options[consoleSel.options.length] = new Option(y, y);
    }
    consoleSel.onchange = function () {
      ratingSel.length = 1;
      relSelect.length = 1;
      singMultiPlayer.length = 1;
      let z = ratingObj.ratingSel.value[this.value];
        for (let i = 0; i < z.length; i++) {
          ratingSel.options[ratingSel.options.length] = new Option(z[i], x[i]);
        }
    };
  };
};
 