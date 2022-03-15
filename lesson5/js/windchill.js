const requestURL = 'https://ksantos16.github.io/wdd230/lesson10/json/weather-icons.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        // console.log(jsonObject); // temporary checking for valid response and data parsing
        const icon = object['myweather'];
        console.log(icon);
        icon.filter(myWeatherIcon);

    });


const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Aberdeen,NC,us&units=imperial&APPID=c0b762abe477dc3799ef6dd1a6e3151f";
let windChill = document.querySelector("#windChill");
let temperature = document.querySelector("#temp");
let windSpeed = document.querySelector("#windSpeed");
let weathericon = document.querySelector('#icon-src');


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        temperature.textContent = jsObject.main.temp.toFixed(0);
        console.log(temperature);
        windSpeed.textContent = jsObject.wind.speed;
        console.log(windSpeed);

        let iconsrc = jsObject.weather[0].icon;
        console.log(iconsrc);
        const desc = jsObject.weather[0].description;

        weathericon = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;

    });

function buildWC(temperature, windSpeed) {

    let wc = 35.74 + 0.6215 * temperature - 35.75 * (windSpeed ** 0.16) + 0.4275 * temperature * (windSpeed ** 0.16);

    wc = Math.floor(wc);

    return wc
}

if (temperature <= 50 && windSpeed >= 4.8) {
    let totalWindChill = buildWC(temperature, windSpeed);
    windChill.innerHTML = totalWindChill;
} else {
    windChill.innerHTML = "N/A";
}

console.log(windChill);

function myWeatherIcon(icon) {
    if (icon === weathericon);
    let myicon = object.myweather.imageurl;
    weathericon.textContent = myicon;
}

