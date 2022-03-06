const requestURL = 'https://ksantos16.github.io/wdd230/lesson9/json/directory.json';
const cards = document.querySelector('.cards');
const classlist = document.querySelector('.classlist');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const directory = jsonObject['directory'];
        directory.forEach(buisness => {
            displayGridDirectory(buisness)

            // Buttons

            const gridBtn = document.querySelector(".gridBtn");
            const card = document.querySelector(".card");
            const table1 = document.querySelector(".table1");
            const listBtn = document.querySelector(".listBtn");
            const table2 = document.querySelector(".table2");

            gridBtn.addEventListener("click", () => {
                displayGridDirectory(buisness);
                document.querySelector(".gridBtn");
                document.querySelector(".classlist").classList.add("display1");
                document.querySelector(".cards").classList.remove("display1");
                // document.querySelector(".table1").classList.toggle("display2");
                // document.querySelector(".table2").classList.toggle("display3");
                console.log(gridBtn);
            });


            listBtn.addEventListener("click", () => {
                displayListDirectory(buisness);
                document.querySelector(".listBtn");
                // document.querySelector(".table1").classList.toggle("display2");
                // document.querySelector(".table2").classList.toggle("display3");
                document.querySelector(".cards").classList.add("display1");
                document.querySelector(".classlist").classList.remove("display1");
                console.log(listBtn);
            });

        });


    });


function displayGridDirectory(buisness) {
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

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${buisness.company}`;
    p1.textContent = `${buisness.address}`;
    p2.textContent = `${buisness.phone}`;
    p3.textContent = `${buisness.website}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', buisness.imageurl);
    logo.setAttribute('alt', `${buisness.company} logo`);
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


function displayListDirectory(buisness) {

    if (window.innerWidth <= 519) {
        let card = document.createElement('tr');
        let td1 = document.createElement('td');

        card.className = "card";
        td1.className = "cell";

        // Change the textContent property of the h2 element to contain the prophet's full name
        td1.innerHTML = `<span class="companyname">${buisness.company}</span><br>
                           ${buisness.address}<br> 
                           ${buisness.website}<br> 
                           ${buisness.phone}`;

        // Add/append the section(card) with the h2 element
        card.appendChild(td1);

        // Add/append the existing HTML div with the cards class with the section(card)
        classlist.appendChild(card);

    } else {
        // Create elements to add to the document
        let card = document.createElement('tr');
        let th = document.createElement('th');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        card.className = "card"
        th.className = "companyname";
        td1.className = "cell";
        td2.className = "cell";
        td3.className = "cell";

        // Change the textContent property of the h2 element to contain the prophet's full name
        th.textContent = `${buisness.company}`;
        td1.textContent = `${buisness.address}`;
        td2.textContent = `${buisness.phone}`;
        td3.textContent = `${buisness.website}`;


        // Add/append the section(card) with the h2 element
        card.appendChild(th);
        card.appendChild(td1);
        card.appendChild(td2);
        card.appendChild(td3);

        // Add/append the existing HTML div with the cards class with the section(card)
        classlist.appendChild(card);
        console.log(classlist);
    }
}
