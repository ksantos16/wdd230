const templeApi = "https://ksantos16.github.io/wdd230/templeinn/json/temples.json";
let temples = document.querySelector(".temples");

fetch(templeApi)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const directory = jsObject['directory'];
        directory.forEach(displayTemples);
        listenForLikes();
    });


function displayTemples(temple) {
    console.log(temple);

    // Create elements to add to the document
    let card = document.createElement('section');

    // Temple Info --------------------------------------------------------------------------------

    // Temple Name
    let templeNames = document.createElement('h3');

    templeNames.textContent = `${temple.name}`;

    // Temple Image
    let templeImg = document.createElement('img')

    templeImg.setAttribute('src', `${temple.image}`);
    templeImg.setAttribute('alt', `${temple.alt}`);
    templeImg.setAttribute('loading', 'lazy');

    // Schedule Info
    let schHeadings = document.createElement('h4');
    let schInformation1 = document.createElement('p');
    let schInformation2 = document.createElement('p');
    let schInformation3 = document.createElement('p');

    schHeadings.textContent = `${temple.scheduletitle}`;
    schInformation1.textContent = `${temple.phase}`;
    schInformation2.textContent = `${temple.ordinanceschedule}`;
    schInformation3.textContent = `${temple.sessionschedule}`;

    // Service Info
    let srvHeadings = document.createElement('h4');
    let srvInformation = document.createElement('p');

    srvHeadings.textContent = `${temple.servicetitle}`;
    srvInformation.textContent = `${temple.services}`;


    // Closure Info
    let clsHeadings = document.createElement('h4');
    let year = document.createElement('h4')
    let clsInformation = document.createElement('p');

    clsHeadings.textContent = `${temple.closuretitle}`;
    year.textContent = `${temple.year}`;
    clsInformation.textContent = `${temple.templeclosureschedule}`;

    // History Info
    let hisHeadings = document.createElement('h4');
    let hisInformation = document.createElement('p');

    hisHeadings.textContent = `${temple.historytitle}`;
    hisInformation.textContent = `${temple.history}`;


    // Contact Info ---------------------------------------------------------------------------------

    // Address
    let contactcontainer = document.createElement('div');

    contactcontainer.innerHTML =
        `
            <div class="address">
                <img class="contacticon" src= ${temple.pinimg} alt="address pin icon">
                <p>${temple.address}</p>
            </div>

            <div class="phemcontainer">
                <div class="phone">
                <img class="contacticon" src= ${temple.phimg} alt="address pin icon">
                <p>${temple.phone}</p>
                </div>

                <div class="email">
                <img class="contacticon" src= ${temple.emimg}
                alt="address pin icon">
                <p>${temple.email}</p>
            </div>

        `;

    // -------------------------------------------------------------------------------------------------------

    // Like Button
    let likeBtn = document.createElement('div');

    // Like Button
    likeBtn.innerHTML =
        `
        <img class="like-no" src= ${temple.like} alt="click the heart to save the temple of your choice">
        <img class="like-yes" src= https://ksantos16.github.io/wdd230/templeinn/images/icons/filledheart.png alt="click the heart to save the temple of your choice">
        <h3>LIKE</h3>
        `;

    // Assigning classes for CSS design ------------------------------------------------------------------

    card.className = "card";
    templeImg.className = "temple-pic";
    likeBtn.className = "likeBtn";
    contactcontainer.className = "contactcontainer";


    // Add/append the section(card) ---------------------------------------------------------------------
    card.appendChild(templeNames);

    card.appendChild(templeImg);

    card.appendChild(schHeadings);
    card.appendChild(schInformation1);
    card.appendChild(schInformation2);
    card.appendChild(schInformation3);

    card.appendChild(srvHeadings);
    card.appendChild(srvInformation);

    card.appendChild(clsHeadings);
    card.appendChild(year);
    card.appendChild(clsInformation);

    card.appendChild(hisHeadings);
    card.appendChild(hisInformation);

    card.appendChild(contactcontainer);



    // Like Button
    card.appendChild(likeBtn);


    // Add/append the existing HTML div with the cards class with the section(card)
    temples.append(card);
};

const listenForLikes = () => {

    const likes = document.querySelectorAll('.like');
    likes.forEach(like => {
        like.removeEventListener("click", (event) => {
            event.target.classList.toggle("like-no");
            event.target.classList.toggle("like-yes");
            if (event.target.classList.contains("like-yes")) {
                localStorage.getItem(event.target);
            }
        })
    })

}
