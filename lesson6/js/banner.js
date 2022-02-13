const bannerDate = new Date()
const bannerDay = bannerDate.getDay();
const banner = document.querySelector('.banner').style.display = "none";


if (bannerDay != 1 || bannerDay != 2) {
    banner.textContent = banner;
};


