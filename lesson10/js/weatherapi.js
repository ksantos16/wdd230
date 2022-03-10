const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,us&APPID=c0b762abe477dc3799ef6dd1a6e3151f";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);



        document.querySelector('#current-temp').textContent = jsObject.main.temp;

        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
    });