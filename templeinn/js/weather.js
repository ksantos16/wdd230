const weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=38.980&lon=-77.1003&exclude=minutely&units=imperial&APPID=c0b762abe477dc3799ef6dd1a6e3151f";
let forecast = document.querySelector(".weather-forcast");
let temperature = document.querySelector(".temperature");
let condition = document.querySelector(".condition");
let humidity = document.querySelector(".humidity");

fetch(weatherApi)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const desc = jsObject.current.weather[0].description;

        temperature.textContent = `${jsObject.hourly[0].temp.toFixed(0)}° F`;
        condition.textContent = desc;
        humidity.textContent = `Humidity: ${jsObject.hourly[0].humidity.toFixed(0)}`;

        let iconsrc = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
        let weatherimg = jsObject.current.weather[0].icon;


        icon1 = iconsrc;
        document.querySelector('.weather-icon-img').setAttribute('src', iconsrc);
        document.querySelector('.weather-icon-img').setAttribute('alt', desc);

        const request = 'https://ksantos16.github.io/wdd230/templeinn/json/weather-icons.json';

        fetch(request)
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
                        document.querySelector('.weather-icon-img').setAttribute('src', myicon);
                        console.log(myicon);
                    }

                })
            });

    });

