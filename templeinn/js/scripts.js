// MENU BUTTON

let menuBtn = document.querySelector(".menuBtn")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
});

// WEATHER ALERT
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Aberdeen,NC,us&units=imperial&APPID=c0b762abe477dc3799ef6dd1a6e3151f";
let alert = document.querySelector(".weather-alert");

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        temperature.textContent = jsObject.main.temp.toFixed(0);
        windSpeed.textContent = jsObject.wind.speed;

        let iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        let weatherimg = jsObject.weather[0].icon;
        const desc = jsObject.weather[0].description;

        alert.addEventListener("click", () => {
            alert.classList.toggle("close");
        });

    });



// 