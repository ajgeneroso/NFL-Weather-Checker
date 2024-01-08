var requestUrl = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams';// Define the API endpoint URL for retrieving football team data from ESPN
var teamDiv = document.getElementById('teams');// Get a reference to the HTML element with the id 'teams'

document.getElementById("myBtn").addEventListener("click", displayTeams);// Add a click event listener to the HTML element with the id 'myBtn'
function displayTeams() {  // Define the function to be executed when 'myBtn' is clicked
  teamDiv.textContent = '';
  fetch(requestUrl) // Fetch data from the specified API endpoint
    .then(function (response) {  // Parse the response as JSON
      return response.json();
    })
    .then(function (data) {  // Process the JSON data
      for (var i = 0; i < data.sports[0].leagues[0].teams.length; i++) {  // Iterate over the teams in the data and create input elements for each
        console.log('NFL Teams \n-------------');
    console.log(data.sports[0].leagues[0].teams);
        var newTeam = document.createElement('input'); // Create a new input element

        newTeam.type = 'image';// Set the type of the input element to 'image'
        newTeam.src = data.sports[0].leagues[0].teams[i].team.logos[0].href;// Set the source (image URL) for the team logo
        newTeam.textContent = data.sports[0].leagues[0].teams[i].team.displayName;// Set the text content (display name) for the team
        newTeam.dataset.city = data.sports[0].leagues[0].teams[i].team.location; // Set a custom data attribute 'city' with the team's location
        newTeam.style = "width:100px;"// Set the style attribute to control the width of the image

        teamDiv.appendChild(newTeam); // Append the newTeam input element to the 'teamDiv' element
      }
    })
};





var temperature = document.querySelector('.temp');// Get references to HTML elements with classes 'temp' and 'city'
var city = document.querySelector('.city');

teamDiv.addEventListener('click', function (e) {  // Add a click event listener to the 'teamDiv' element
  var apiUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${e.target.dataset.city}&units=imperial&apikey=InSyQJBRzUZVQlYpMWDOxMQ5NlBmNRTT`;// Construct the API URL for retrieving weather data based on the clicked team's location

  fetch(apiUrl)// Fetch weather data from the specified API endpoint
    .then(function (response) { // Parse the response as JSON
      return response.json();
    })
    .then(function (data) { // Process the JSON data
      temperature.textContent = data.data.values.temperature;// Update the text content of the 'temperature' and 'city' elements with weather information
      city.textContent = data.location.name;      
    });
});



