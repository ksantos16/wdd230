const weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=38.980&lon=-77.1003&exclude=minutely&units=imperial&APPID=c0b762abe477dc3799ef6dd1a6e3151f";
let forecast = document.querySelector(".weather-forcast");

fetch(weatherApi)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let weatherCard = jsObject["daily"];

        weatherCard.filter(reading => {
            if (weatherCard[reading] !== 0, weatherCard[reading] !== 1, weatherCard[reading] !== 2) {
                weatherCard.splice(reading, 1)
                console.log(reading)
            };
        });

        forecast.innerHTML = "";
        weatherCard.forEach(weatherForcast);
        console.log(newWeatherList);

    })



function weatherForcast(weather) {
    let card = document.createElement('section');
    let day = document.createElement('p');
    let mintemp = document.createElement('p');
    let maxtemp = document.createElement('p');
    let weathercondition = document.createElement('p');
    let humidity = document.createElement('p');

    let desc = weather.weather[0].description;
    let date = new Date();

    day.textContent = date;
    mintemp.textContent = `Low: ${weather.temp.min.toFixed(0)}° F`;
    maxtemp.textContent = `High: ${weather.temp.max.toFixed(0)}° F`;
    weathercondition.textContent = desc;
    humidity.textContent = `Humidity: ${weather.humidity.toFixed(0)}`;

    let weatherimg2 = weather.weather[0].icon;

    let src = weather.weather[0].icon

    document.querySelector('.weatherimg').setAttribute('src', src);
    document.querySelector('.weatherimg').setAttribute('alt', desc);


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
                if (image.id === weatherimg2) {
                    let myicon = image.imageurl;
                    document.querySelector('.weatherimg').setAttribute('src', myicon);
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
