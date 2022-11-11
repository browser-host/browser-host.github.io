// TO DOs

// -  write function to make API calls and fill out 'games' array
//    https://github.com/dword4/nhlapi#game-ids
//      ^ nhl api


// requires: both titles, time, and both scores
const games = [
  {
    'awayTitle': 'CAR',
    'homeTitle': 'FLA',

    'time': 'F',

    'awayScore': '3',
    'homeScore': '0',
  },
  {
    'awayTitle': 'PIT',
    'homeTitle': 'WSH',

    'time': 'F',

    'awayScore': '4',
    'homeScore': '1',
  },
  {
    'awayTitle': 'VAN',
    'homeTitle': 'MTL',

    'time': 'F',

    'awayScore': '2',
    'homeScore': '5',
  },
];


// turn html string to html element
function elementFromHtml(htmlString){
  const template = document.createElement("template");
  template.innerHTML = htmlString.trim();
  return template.content.firstElementChild;
}

// make html from game object
function gameToString(game){
  finalString =  '<div class="gameGrid"> <div class="homeTitle">  <h3>' + 
    game.awayTitle +
    '</h3> </div> <div class"versus"> <h4>vs.</h4> </div> <div class="awayTitle"> <h3>' +
    game.homeTitle +
    '</h3> </div> <div class="awayScore"> <h3>' +
    game.awayScore +
    '</h3> </div> <div class="time"> <h4>' +
    game.time +
    '</h4> </div> <div class="homeScore"> <h3>' +
    game.homeScore + 
    '</h3> </div> </div>'

  return finalString;
}


function placeGamesHtml(gamesList){
  // init vars
  left = true;
  leftFirst = true;
  rightFirst = true;
  
  const hrElem = document.createElement("hr");

  // get columns to place games into
  const leftCol  = document.getElementById('left');
  const rightCol = document.getElementById('right');

  // for each game in the list make it into a string
  gamesList.map(gameToString).forEach(gameString => {
    // append to right or left col
    if(left){
      // add hr if necessary
      if(!leftFirst){
        leftCol.append(hrElem);
      }

      leftCol.append(elementFromHtml(gameString));

      leftFirst = false;
      left = false;

    } else {
      if(!rightFirst){
        rightCol.append(hrElem);
      }

      rightCol.append(elementFromHtml(gameString));

      rightFirst = false;
      left = true;
    }
  })
}

placeGamesHtml(games);
