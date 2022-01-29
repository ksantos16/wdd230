
function toggleMenu() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;


// x.addEventListener('click', () => { toggleMenu.classList.toggle("x") }, false);


// const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
// document.getElementById('currentdate').textContent=new Date().toLocaleDateString('en-US', options);

const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;

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
currentyear.innerHTML = `&copy ${toadysdate.getFullYear()} Aberdeen Chamber of Commerce | Kira Santos | WDD 230 Project |`;
document.getElementById('currentdate').textContent = currentdate;
// document.querySelector("#currentyear").textContent = year;


