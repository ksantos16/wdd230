const bannerDate = new Date()
const bannerDay = bannerDate.getDay();

let banner1 = document.querySelector("#banner");

if (bannerDay === 1 || bannerDay === 2) {
    banner1.classList.toggle("show");
} else {
    banner1.remove();
}


