const primaryNav = document.querySelector("#primaryNav")
const hamburgerBtn = document.querySelector("#hamburgerBtn")

hamburgerBtn.addEventListener("click", () => {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
});


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
    let h3 = document.createElement('h3');
    let logo = document.createElement('img');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');

    if (spolight.level === "Gold") {
        // Change the textContent property of the h2 element to contain the prophet's full name
        h3.textContent = spolight.company;
        h4.textContent = spolight.slogan;
        p.textContent = spolight.website;
    } else {
        business.remove()
    }

    //setting classes names to the element created
    business.className = "spotlight-box1";
    business.className = "spotlight-box2";
    business.className = "spotlight-box3";
    logo.className = "spotlightlogoimg";

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', spolight.imageurl);
    logo.setAttribute('alt', spolight.alt);
    logo.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    business.appendChild(logo);
    business.appendChild(h3);
    business.appendChild(h4);
    business.appendChild(p);

    // Add/append the existing HTML div with the cards class with the section(business)
    spotlights.append(business);
}
