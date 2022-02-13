let temperature = parseInt(document.querySelector("#temp").value);
let windSpeed = parseInt(document.querySelector("#windSpeed").value);

function buildWC(temperature, windSpeed) {
    let windChill = document.querySelector("#windChill");


    let wc = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed ** 0.16) + 0.4275 * temperature * Math.pow(windSpeed ** 0.16);

    wc = Math.floor(wc);

    wc = (wc > temperature) ? temp : wc;

    windChill.innerHTML = wc;
}