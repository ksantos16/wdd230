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

const lastmod3 = document.querySelector('#lastmod3');
lastmod3.innerHTML = `Last Modification: ${document.lastModified}`;


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

const currentyear3 = document.querySelector("#currentyear3")
currentyear3.innerHTML = toadysdate.getFullYear();

document.getElementById('currentdate').textContent = currentdate;

const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);