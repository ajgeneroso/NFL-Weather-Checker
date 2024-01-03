var requestUrl = 'https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/14876/stats';
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data.categories[0]);
  });