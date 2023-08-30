const getWeatherAPI = '';
const ApiKey = '';
//Need weather API info

// DOM MANIPULATION VARIABLES

const weatherBox = document.getElementsByClassName('weather-box');
const tempBox = document.getElementsByClassName('temp-box');
const windBox = document.getElementsByClassName('wind-box');
const locationBox = document.querySelector(".textVal").value

const storage = JSON.parse(localStorage.getItem("storage")) || [];

function getLocation() {
  var location = locationBox.value;
  storage.push(location);
  return "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + ApiKey + "&units=imperial";
}
 
function retrieveWeather() {
  return fetch(getLocation())

  .then(res => res.json())
    .then(data => {
        tempBox.innerHTML = "Temp: " + data.main.temp;
        windBox.innerHTML = "Wind Speed: " + data.wind.speed;
    })  
}


// fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
//   // The browser fetches the resource from the remote server without first looking in the cache.
//   // The browser will then update the cache with the downloaded resource.
//   cache: 'reload',
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
