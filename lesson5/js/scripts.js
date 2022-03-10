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

