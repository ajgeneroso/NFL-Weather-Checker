var requestUrl = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams';
var apiUrl = 'https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=InSyQJBRzUZVQlYpMWDOxMQ5NlBmNRTT';
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('NFL Teams \n-------------');
    console.log(data.sports[0].leagues[0].teams);
  });
  fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Weather \n-------------');
    console.log(data);
  });




