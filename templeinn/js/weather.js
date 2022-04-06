const weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=38.980&lon=-77.1003&exclude=minutely&units=imperial&APPID=c0b762abe477dc3799ef6dd1a6e3151f";
let forecast = document.querySelector(".weather-forcast");

fetch(weatherApi)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let weatherCard = jsObject["daily"];
        console.log(weatherCard);
        forecast.innerHTML = "";
        weatherCard.forEach(weatherForcast);

    });


function weatherForcast(weather) {
    if (weather.length <= 2) {
        let card = document.createElement('section');
        let day = document.createElement('p');
        let mintemp = document.createElement('p');
        let maxtemp = document.createElement('p');
        let weathercondition = document.createElement('p');
        let humidity = document.createElement('p');

        let desc = info.weather[0].description;
        let date = new Date();

        day.textContent = date;
        mintemp.textContent = `Low: ${info.temp.min.toFixed(0)}° F`;
        maxtemp.textContent = `High: ${info.temp.max.toFixed(0)}° F`;
        weathercondition.textContent = desc;
        humidity.textContent = `Humidity: ${info.humidity.toFixed(0)}`;

        let weatherimg = info.weather[0].icon;

        let iconsrc = `https://openweathermap.org/img/w/${info.weather[0].icon
            }.png`;

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


        card.appendChild(date);
        card.appendChild(myicon)
        card.appendChild(mintemp);
        card.appendChild(maxtemp);
        card.appendChild(weathercondition);
        card.appendChild(humidity)

        forecast.append(card);

    }
}
