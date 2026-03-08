async function getWeather(){

let city = document.getElementById("city").value;

let apiKey = "489312d3d1bf414fb5b04e574a7ed25b";

let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}&days=7`;

let response = await fetch(url);

let data = await response.json();

let forecastHTML = "";

for(let i = 0; i < 7; i++){

let day = data.data[i];

forecastHTML += `
<div class="day">
<p><b>${day.datetime}</b></p>
<p>🌡 Max Temp: ${day.max_temp}°C</p>
<p>🌡 Min Temp: ${day.min_temp}°C</p>
<p>🌧 Rain Chance: ${day.pop}%</p>
<p>${day.weather.description}</p>
</div>
`;

}

document.getElementById("forecast").innerHTML = forecastHTML;

}