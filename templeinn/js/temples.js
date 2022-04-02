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
    let address = document.createElement('p');
    let email = document.createElement('p');
    let likeBtn = document.createElement('img');

    card.className = "card";
    image.className = "temple-pic";
    templeNames.className = "temple-name";
    information.className = "para";
    phone.className = "icon";
    address.className = "icon";
    email.className = "";
    likeBtn.className = "likeBtn icon";

    // Change the textContent property of the h2 element to contain the prophet's full name
    templeNames.textContent = `${temple.name}`;

    headings.textContent = `${temple.scheduletitle}`;
    information.textContent = `${temple.phase}`;
    information.textContent = `${temple.ordinanceschedule}`;
    information.textContent = `${temple.sessionschedule}`;

    // Service Info
    headings.textContent = `${temple.servicetitle}`;
    information.textContent = `${temple.services}`;

    // Closure Info
    headings.textContent = `${temple.closuretitle}`;
    headings.textContent = `${temple.year}`;
    information.textContent = `${temple.templeclosureschedule}`;

    // History Info
    headings.textContent = `${temple.historytitle}`;
    information.textContent = `${temple.history}`;

    // Contact Info
    phone.textContent = `${temple.phone}`;
    address.textContent = `${temple.address}`;
    email.textContent = `${temple.email}`;

    // Temple Image


    templeImg.setAttribute('src', temple.image);
    templeImg.setAttribute('alt', `${temple.alt}`);
    templeImg.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);

    // Add/append the existing HTML div with the cards class with the section(card)
    temples.append(card);
}