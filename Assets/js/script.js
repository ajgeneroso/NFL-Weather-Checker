var requestUrl = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams';
var apiUrl = 'https://api.tomorrow.io/v4/weather, /realtime?location=toronto&apikey=InSyQJBRzUZVQlYpMWDOxMQ5NlBmNRTT';
var nflTeams = ["Arizona", "Atlanta", "Baltimore", "Buffalo", "Carolina", "Chicago", "Cincinnati", "Cleveland", "Dallas", "Denver", "Detroit", "Green Bay", "Houston", "Indianapolis", "Jacksonville", "Kansas City", "Las Vegas", "LAC", "LAR", "Miami", "Minnesota", "New England", "New Orleans", "NYG", "NYJ", "Philadelphia", "Pittsburgh", "San Francisco", "Seattle", "Tampa Bay", "Tennessee", "Washington"];

var teamDiv = document.getElementById('teams');

document.getElementById("myBtn").addEventListener("click", displayTeams);
function displayTeams() {
  // alert("Clicked!")

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('NFL Teams \n-------------');
    console.log(data.sports[0].leagues[0].teams);

    for( var i = 0; i < data.sports[0].leagues[0].teams.length; i++){
    //CREATE
    var newTeam = document.createElement('button');
        

    //INJECT
    newTeam.textContent = data.sports[0].leagues[0].teams[i].team.displayName;
    newTeam.dataset.city = data.sports[0].leagues[0].teams[i].team.location;

    //APPEND
    teamDiv.appendChild(newTeam);
    }
    
})

  };



