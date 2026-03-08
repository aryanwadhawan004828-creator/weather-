let apiKey="489312d3d1bf414fb5b04e574a7ed25b";

async function getWeather(){

let city=document.getElementById("city").value;

let url=`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}&days=7`;

let response=await fetch(url);

let data=await response.json();

if(!data.data){
document.getElementById("forecast").innerHTML="City not found";
return;
}

let forecastHTML="";

for(let i=0;i<7;i++){

let day=data.data[i];

forecastHTML+=`
<div class="day">
<p>${day.datetime}</p>
<p>${day.temp}°C</p>
<p>${day.weather.description}</p>
</div>
`;

}

document.getElementById("forecast").innerHTML=forecastHTML;

}

async function searchCity(){

let city=document.getElementById("city").value;

if(city.length<1){
document.getElementById("suggestions").innerHTML="";
return;
}

let url=`https://api.weatherbit.io/v2.0/cities?city=${city}&key=${apiKey}`;

let response=await fetch(url);

let data=await response.json();

let suggestions="";

data.data.slice(0,5).forEach(place=>{

suggestions+=`
<div class="suggestion" onclick="selectCity('${place.city_name}')">
${place.city_name}, ${place.country_code}
</div>
`;

});

document.getElementById("suggestions").innerHTML=suggestions;

}

function selectCity(name){

document.getElementById("city").value=name;

document.getElementById("suggestions").innerHTML="";

getWeather();

}
