var requestUrl = 'https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/14876/stats';
var apiUrl = 'https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=InSyQJBRzUZVQlYpMWDOxMQ5NlBmNRTT';
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data.categories[0]);
  });
  fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });


  document.querySelector(".city").innerHTML = location.name;

