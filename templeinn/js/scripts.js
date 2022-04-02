// MENU BUTTON

let menuBtn = document.querySelector(".menuBtn")

menuBtn.addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("active");
    menuBtn.classList.toggle("active");
});

// WEATHER ALERT
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.980&lon=-77.1003&exclude=minutely&appid=c0b762abe477dc3799ef6dd1a6e3151f";

const closeBtn = document.querySelector(".closeBtn")

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        if (jsObject === "alerts") {

            let weatherMessage = jsObject.alerts[0].description;
            document.querySelector(".weather-alert").innerHTML = weatherMessage;
            console.log(weatherMessage);

        } else {
            document.querySelector(".weather-alert").classList.toggle("close");
        };

        closeBtn.addEventListener("click", () => {
            document.querySelector(".weather-alert").classList.toggle("close");
            document.querySelector(".closeBtn").classList.toggle("close");
        });

    });

// 