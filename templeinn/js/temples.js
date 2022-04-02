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
    let templeNames = document.createElement('h3');
    let headings = document.createElement('h4')
    let information = document.createElement('p');
    let phone = document.createElement('p');
    let adress = document.createElement('p');
    let email = document.createElement('p');
    let likeBtn = document.createElement('img');

    card.className = "card";
    image.className = "temple-pic";
    templeNames.className = "temple-name";
    information.className = "para";
    phone.className = "icon";
    adress.className = "icon";
    email.className = "";
    likeBtn.className = "likeBtn icon";

    // Change the textContent property of the h2 element to contain the prophet's full name
    templeNames.textContent = `${directory.name}`;
    headings.textContent = `${directory.schedule title
} `;
    information.textContent = `${ directory.phone } `;
    phone.textContent = `${ directory.website } `;
    adress.textContent = `${ directory.website } `;
    email.textContent = `${ directory.website } `;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', business.imageurl);
    logo.setAttribute('alt', `${ business.company } logo`);
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