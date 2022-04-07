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
        <img class="like-yes" src= https://ksantos16.github.io/wdd230/templeinn/images/icons/filledheart.png alt="filled heart and saved temple of your choice">
        <h3>LIKE</h3>
        `;

    // Assigning classes for CSS design ------------------------------------------------------------------

    card.className = "card";
    templeImg.className = "temple-pic";
    likeBtn.className = "likeBtn";
    contactcontainer.className = "contactcontainer";
    schHeadings.className = "temple-h";
    schInformation1.className = "temple-p";
    schInformation2.className = "temple-p";
    schInformation3.className = "temple-p";
    srvHeadings.className = "temple-h";
    srvInformation.className = "temple-p";
    clsHeadings.className = "temple-h";
    year.className = "temple-p";
    clsInformation.className = "temple-h";
    hisHeadings.className = "temple-p";
    hisInformation.className = "temple-p";


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
    const likes = document.querySelectorAll(".like-no");

    if (!localStorage.getItem("likeBtnStatus")) {
        localStorage.setItem("likeBtnStatus", "False");
        const empty = document.querySelectorAll(".like-no");
        empty.classList.add("show");
        console.log(empty);

        const full = document.querySelectorAll(".like-yes");
        full.classList.add("hide");

    } else if (localStorage.getItem("likeBtnStatus")) {
        let btnStatus = localStorage.getItem("likeBtnStatus");
        console.log(btnStatus);
        if (btnStatus === "True") {
            const favorite = document.querySelectorAll(".like-yes");
            console.log(favorite.classList);
            favorite.classList.remove("hide");

            const unfav = document.querySelectorAll(".like-no");
            console.log(unfav.classList);
            unfav.classList.add("hide");

        } else if (btnStatus === "False") {
            const favorite = document.querySelectorAll(".like-yes");
            favorite.classList.add("hide");

            const unfav = document.querySelectorAll(".like-no");
            unfav.classList.add("show");
        };
    };


    console.log(likes);
    const array = Array.from(likes);
    array.forEach((like, index) => {
        like.addEventListener("click", (event) => {
            console.log(index);
            event.target.classList.toggle("hide");


            const likeYes = document.querySelectorAll(".like-yes");
            const array1 = Array.from(likeYes);
            array1.forEach((like, index2) => {
                console.log(like);

                if (index === index2) {
                    console.log("yes this work");
                    console.log(index, index2);
                    like.classList.toggle("show");

                    localStorage.setItem("likeBtnStatus", "True");


                    like.addEventListener("click", (event) => {
                        event.target.classList.remove("show");
                        array[index].classList.remove("hide");

                        localStorage.setItem("likeBtnStatus", "False");
                    })
                }

                // like.addEventListener("click", (event) => {


                // })
            })

            // if (event.target.classList.contains("like-yes")) {
            //     console.log("✅💾 Saving Favorite...");
            //     getFaveData(event.target);
            // } else {
            //     console.log("❌ Removing Favorite...");
            //     getFaveData(event.target);
            // }
        })
    })
}

// function getFaveData() {

//     let today = new Date();
//     let millisecondsToDays = 86400000;
//     let prior = localStorage.getItem('lastvisit');
//     let obj = new Date(prior);
//     console.log(obj);

//     if (!prior) {
//         localStorage.setItem('lastvisit', today);
//         let visit = " This is your first visit. Welcome to Aberdeen Chamber of Commerce!"
//         document.querySelector(".lastv").innerHTML = visit;
//         console.log(visit);

//     } else {
//         let visit = ((today - obj) / millisecondsToDays).toFixed(0) + " days ago. Welcome Back!";
//         document.querySelector(".lastv").innerHTML = visit;
//         console.log(visit);
//     }


//     localStorage.setItem('lastvisit', today);
// }