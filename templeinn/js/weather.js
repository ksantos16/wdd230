
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Bethesda,MD,us&units=imperial&APPID=c0b762abe477dc3799ef6dd1a6e3151f";
let temperature = document.querySelector(".temperature");
let condition = document.querySelector(".condition");
let humidity = document.querySelector(".humidity");

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const desc = jsObject.weather[0].description;

        temperature.textContent = jsObject.main.temp.toFixed(0);
        condition.textContent = desc;
        humidity.textContent = jsObject.main.humidity.toFixed(0);

        let iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        let weatherimg = jsObject.weather[0].icon;


        icon1 = iconsrc;
        document.querySelector('.weather-icon-img').setAttribute('src', iconsrc);
        document.querySelector('.weather-icon-img').setAttribute('alt', desc);

        const requestURL = 'https://ksantos16.github.io/wdd230/templeinn/json/weather-icons.json';

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

