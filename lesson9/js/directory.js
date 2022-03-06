const requestURL = 'https://ksantos16.github.io/wdd230/lesson9/json/directory.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const directory = jsonObject['directory'];
        directory.forEach(displayDirectory);
    });



function displayDirectory(directory) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let logo = document.createElement('img');

    card.className = "card"
    h2.className = "company";
    p1.className = "para";
    p2.className = "para";
    p3.className = "para";
    logo.className = "directoryLogo";
    // let order = ``;


    // if (prophet.order === 1) {
    //     order = `${prophet.order}st`;
    // } else if (prophet.order === 2) {
    //     order = `${prophet.order}nd`;
    // } else if (prophet.order === 3) {
    //     order = `${prophet.order}rd`;
    // } else {
    //     order = `${prophet.order}th`;
    // }

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${directory.company}`;
    p1.textContent = `${directory.address}`;
    p2.textContent = `${directory.phone}`;
    p3.textContent = `${directory.website}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', directory.imageurl);
    logo.setAttribute('alt', `${directory.company} logo`);
    logo.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);

    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}

const gridBtn = document.querySelector(".gridBtn");
const card = document.querySelector(".card");
const table1 = document.querySelector(".table1");
const listBtn = document.querySelector(".listBtn");
const table2 = document.querySelector(".table2");

gridBtn.addEventListener("click", () => {
    document.querySelector(".gridBtn");
    document.querySelector(".cards").classList.toggle("display1");
    document.querySelector(".table1").classList.toggle("display2");
    document.querySelector(".table2").classList.toggle("display3");
    console.log(gridBtn);
});


listBtn.addEventListener("click", () => {
    document.querySelector(".listBtn");
    document.querySelector(".table1").classList.toggle("display2");
    document.querySelector(".table2").classList.toggle("display3");
    document.querySelector(".cards").classList.toggle("display1");
    console.log(listBtn);
});