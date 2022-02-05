const bannerDate = new Date()
const bannerDay = bannerDate.getDay();
const banner = document.querySelector('.banner');


if (bannerDay != 1 || bannerDay != 2) {
    document.querySelector('.banner').textContent = banner;
};


