const requestURL = 'https://github.com/ksantos16/wdd230/lesson9/json/directory.json';
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
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let logo = document.createElement('img');
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
    p1.textContent = `${directory.address}`;
    p2.textContent = `${directory.phone}`;
    p3.textContent = `${directory.website}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', directory.imageurl);
    logo.setAttribute('alt', `${directory.company} logo`);
    logo.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(logo);

    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}