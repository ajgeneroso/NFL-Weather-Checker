var requestUrl = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams';
var teamDiv = document.getElementById('teams');

document.getElementById("myBtn").addEventListener("click", displayTeams);
function displayTeams() {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.sports[0].leagues[0].teams.length; i++) {
        var newTeam = document.createElement('input');

        newTeam.type = 'image';
        newTeam.src = data.sports[0].leagues[0].teams[i].team.logos[0].href;
        newTeam.textContent = data.sports[0].leagues[0].teams[i].team.displayName;
        newTeam.dataset.city = data.sports[0].leagues[0].teams[i].team.location;
        newTeam.style = "width:100px;"

        teamDiv.appendChild(newTeam);
      }
    })
};





var temperature = document.querySelector('.temp');
var city = document.querySelector('.city');

teamDiv.addEventListener('click', function (e) {
  var apiUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${e.target.dataset.city}&units=imperial&apikey=InSyQJBRzUZVQlYpMWDOxMQ5NlBmNRTT`;

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      temperature.textContent = data.data.values.temperature;
      city.textContent = data.location.name;      
    });
});



