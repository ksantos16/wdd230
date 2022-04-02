const templeApi = "https://ksantos16.github.io/wdd230/templeinn/json/temples.json";
let temples = document.querySelector(".temples");

fetch(templeApi)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const directory = jsObject['directory'];
        directory.forEach(displayTemples);

    });


function displayTemples(temple) {
    console.log(temple);

    // Create elements to add to the document
    let card = document.createElement('section');

    // Temple Name
    let templeNames = document.createElement('h3');

    // Temple Image
    let templeImg = document.createElement('img')

    // Schedule Info
    let schHeadings = document.createElement('h4');
    let schInformation1 = document.createElement('p');
    let schInformation2 = document.createElement('p');
    let schInformation3 = document.createElement('p');

    // Service Info
    let srvHeadings = document.createElement('h4');
    let srvInformation = document.createElement('p');


    // Closure Info
    let clsHeadings = document.createElement('h4');
    let year = document.createElement('h4')
    let clsInformation = document.createElement('p');

    // History Info
    let hisHeadings = document.createElement('h4');
    let hisInformation = document.createElement('p');

    // Contact Info
    let addressIcon = document.createElement('img');
    let address = document.createElement('p');

    let phoneIcon = document.createElement('img');
    let phone = document.createElement('p');

    let emailIcon = document.createElement('img');
    let email = document.createElement('p');

    // Like Button
    let likeBtn = document.createElement('img');

    // card.className = "card";
    // image.className = "temple-pic";
    // templeNames.className = "temple-name";
    // information.className = "para";
    // phone.className = "icon";
    // address.className = "icon";
    // email.className = "";
    // likeBtn.className = "likeBtn icon";

    // Temple Name
    templeNames.textContent = `${temple.name}`;

    // Temple Image
    templeImg.setAttribute('src', `${temple.image}`);
    templeImg.setAttribute('alt', `${temple.alt}`);
    templeImg.setAttribute('loading', 'lazy');

    // Information about the temple and it's services --------------------------------------------------

    // Schedule Info
    schHeadings.textContent = `${temple.scheduletitle}`;
    schInformation1.textContent = `${temple.phase}`;
    schInformation2.textContent = `${temple.ordinanceschedule}`;
    schInformation3.textContent = `${temple.sessionschedule}`;

    // Service Info
    srvHeadings.textContent = `${temple.servicetitle}`;
    srvInformation.textContent = `${temple.services}`;

    // Closure Info
    clsHeadings.textContent = `${temple.closuretitle}`;
    year.textContent = `${temple.year}`;
    clsInformation.textContent = `${temple.templeclosureschedule}`;

    // History Info
    hisHeadings.textContent = `${temple.historytitle}`;
    hisInformation.textContent = `${temple.history}`;

    // Contact Info of the temple ------------------------------------------------------------------------

    //Address

    // Address Icon
    addressIcon.setAttribute('src', temple.pinimg);
    addressIcon.setAttribute('alt', 'address pin icon');
    addressIcon.setAttribute('loading', 'lazy');

    // Address
    address.textContent = `${temple.address}`;


    // Phone

    // Phone Icon
    phoneIcon.setAttribute('src', temple.phimg);
    phoneIcon.setAttribute('alt', 'phone icon');
    phoneIcon.setAttribute('loading', 'lazy');

    // Phone number
    phone.textContent = `${temple.phone}`;


    // Email

    // Email Icon
    emailIcon.setAttribute('src', temple.emimg);
    emailIcon.setAttribute('alt', 'email icon');
    emailIcon.setAttribute('loading', 'lazy');
    // Email
    email.textContent = `${temple.email}`;

    // Add/append the section(card)
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

    card.appendChild(phoneIcon);
    card.appendChild(phone);
    card.appendChild(addressIcon);
    card.appendChild(address);
    card.appendChild(emailIcon);
    card.appendChild(email);

    card.appendChild(likeBtn);


    // Add/append the existing HTML div with the cards class with the section(card)
    temples.append(card);
}