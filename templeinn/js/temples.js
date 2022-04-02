const templeApi = "https://ksantos16.github.io/wdd230/templeinn/json/temples.json";
let temples = document.querySelector(".temples");

fetch(templeApi)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let weatherCard = jsObject["daily"];
        console.log(weatherCard);
        forecast.innerHTML = "";
        weatherCard.forEach(weatherForcast);

    });


function displayTemples(temple) {

    // Create elements to add to the document
    let card = document.createElement('section');
    let image = document.createElement('img')
    let templeName = document.createElement('h3');
    let information = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let logo = document.createElement('img');

    card.className = "card"
    h2.className = "company";
    p1.className = "para";
    p2.className = "para";
    p3.className = "para";
    logo.className = "directoryLogo";

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${business.company}`;
    p1.textContent = `${business.address}`;
    p2.textContent = `${business.phone}`;
    p3.textContent = `${business.website}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', business.imageurl);
    logo.setAttribute('alt', `${business.company} logo`);
    logo.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);

    // Add/append the existing HTML div with the cards class with the section(card)
    cards.append(card);
}