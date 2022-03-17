
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Aberdeen,NC,us&units=imperial&APPID=c0b762abe477dc3799ef6dd1a6e3151f";
let windChill = document.querySelector("#windChill");
let temperature = document.querySelector("#temp");
let windSpeed = document.querySelector("#windSpeed");

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        temperature.textContent = jsObject.main.temp.toFixed(0);
        windSpeed.textContent = jsObject.wind.speed;

        let iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        let weatherimg = jsObject.weather[0].icon;
        const desc = jsObject.weather[0].description;

        icon1 = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;

        const requestURL = 'https://ksantos16.github.io/wdd230/lesson10/json/weather-icons.json';

        fetch(requestURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (object) {
                // console.log(jsonObject); // temporary checking for valid response and data parsing
                const icons = object['myweather'];
                console.log(icons);

                icons.forEach(image => {
                    if (image.id === weatherimg) {
                        let myicon = image.imageurl;
                        document.querySelector('#weathericon').setAttribute('src', myicon);
                        console.log(myicon);
                    }

                })
            });

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

