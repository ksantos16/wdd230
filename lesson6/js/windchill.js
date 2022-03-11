const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,us&units=imperial&APPID=c0b762abe477dc3799ef6dd1a6e3151f";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);



        const currentTemp = document.querySelector('#current-temp')

        currentTemp.textContent = jsObject.main.temp.toFixed(0);

        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;

        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
    });




let temperature = document.querySelector("#temp").innerHTML;
let windSpeed = document.querySelector("#windSpeed").innerHTML;
let windChill = document.querySelector("#windChill");

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

