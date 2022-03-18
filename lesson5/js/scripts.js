// -----------------------------  HAMBURGER BUTTON ------------------------------------- //


const primaryNav = document.querySelector("#primaryNav")
const hamburgerBtn = document.querySelector("#hamburgerBtn")

hamburgerBtn.addEventListener("click", () => {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
});


// -----------------------------  DATE DISPLAY IN NAV & FOOTER ------------------------------------- //


// const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
// document.getElementById('currentdate').textContent=new Date().toLocaleDateString('en-US', options);

const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;

const lastmod2 = document.querySelector('#lastmod2');
lastmod2.innerHTML = `Last Modification: ${document.lastModified}`;



//long day names array
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

//long month name array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const toadysdate = new Date();
const dayName = daynames[toadysdate.getDay()];
const monthName = months[toadysdate.getMonth()];
const currentdate = `${dayName}, ${monthName} ${toadysdate.getDate()}, ${toadysdate.getFullYear()}`;

const currentyear = document.querySelector("#currentyear")
currentyear.innerHTML = toadysdate.getFullYear();

const currentyear2 = document.querySelector("#currentyear2")
currentyear2.innerHTML = toadysdate.getFullYear();

document.getElementById('currentdate').textContent = currentdate;


// -----------------------------  LAST VISIT ------------------------------------- //


function lastVisit() {

    let today = new Date();
    let millisecondsToDays = 86400000;
    let prior = localStorage.getItem('lastvisit');
    let obj = new Date(prior);
    console.log(obj);

    if (!prior) {
        localStorage.setItem('lastvisit', today);
        let visit = " This is your first visit. Welcome to Aberdeen Chamber of Commerce!"
        document.querySelector(".lastv").innerHTML = visit;
        console.log(visit);

    } else {
        let visit = ((today - obj) / millisecondsToDays).toFixed(0) + " days ago. Welcome Back!";
        document.querySelector(".lastv").innerHTML = visit;
        console.log(visit);
    }


    localStorage.setItem('lastvisit', today);
}
lastVisit();



// -----------------------------  SPOTLIGHT ------------------------------------- //

const requestURL = 'https://ksantos16.github.io/wdd230/lesson9/json/directory.json';
const spotlights = document.querySelector('.spotlight-box');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.log(jsonObject); // temporary checking for valid response and data parsing
        const businesses = jsonObject['directory'];
        businesses.forEach(displaySpotlight);

    });




function displaySpotlight(spolight) {
    // Create elements to add to the document
    let business = document.createElement('section');
    // let business1 = document.createElement('section');
    // let business2 = document.createElement('section');
    // let business3 = document.createElement('section');
    let h3 = document.createElement('h3');
    let logo = document.createElement('img');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');

    if (spolight.level === "Gold") {
        // Change the textContent property of the h2 element to contain the prophet's full name
        h3.textContent = spolight.company;
        h4.textContent = spolight.slogan;
        p.textContent = spolight.website;
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        logo.setAttribute('src', spolight.imageurl);
        logo.setAttribute('alt', spolight.alt);
        logo.setAttribute('loading', 'lazy');
    } else if (spolight.company === "Aberdeen & Rockfish Railroad" && window.innerWidth <= 949) {
        business.style.display = "none";
    } else {
        business.style.display = "none";
    }
    //setting classes names to the element created
    business.className = "spotlight-box1";
    // business2.className = "spotlight-box2";
    // business3.className = "spotlight-box3";
    logo.className = "spotlightlogoimg";


    // Add/append the section(spotlight-box1)
    business.appendChild(logo);
    business.appendChild(h3);
    business.appendChild(h4);
    business.appendChild(p);



    // Add/append the section(spotlight-box1)
    // business1.appendChild(logo);
    // business1.appendChild(h3);
    // business1.appendChild(h4);
    // business1.appendChild(p);

    // Add/append the section(spotlight-box2)
    // business2.appendChild(logo);
    // business2.appendChild(h3);
    // business2.appendChild(h4);
    // business2.appendChild(p);

    // Add/append the section(spotlight-box3)
    // business3.appendChild(logo);
    // business3.appendChild(h3);
    // business3.appendChild(h4);
    // business3.appendChild(p);

    // Add/append the existing HTML div with the cards class with the section(business)
    spotlights.append(business);
    // spotlights.append(business1);
    // spotlights.append(business2);
    // spotlights.append(business3);
}
