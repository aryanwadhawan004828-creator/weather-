let apiKey="489312d3d1bf414fb5b04e574a7ed25b";

async function getWeather(){

let city=document.getElementById("city").value;

let url=`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}&days=7`;

let response=await fetch(url);
let data=await response.json();

if(!data.data){
document.getElementById("result").innerHTML="City not found";
return;
}

let output="";

data.data.forEach(day=>{

output+=`
<div class="day">
<p>${day.datetime}</p>
<p>Min Temp: ${day.min_temp}°C</p>
<p>Max Temp: ${day.max_temp}°C</p>
<p>Rain: ${day.pop}%</p>
<p>${day.weather.description}</p>
</div>
`;

});

document.getElementById("result").innerHTML=output;

}

function suggestCity(){

let city=document.getElementById("city").value;

let cities=[
"Lucknow","London","Los Angeles","Lahore","Lisbon",
"Delhi","Dubai","Paris","New York","Tokyo"
];

let list="";

cities.forEach(c=>{

if(c.toLowerCase().startsWith(city.toLowerCase()) && city!=""){

list+=`<div class="suggestion" onclick="selectCity('${c}')">${c}</div>`;

}

});

document.getElementById("suggestions").innerHTML=list;

}

function selectCity(name){

document.getElementById("city").value=name;

document.getElementById("suggestions").innerHTML="";

getWeather();

}
