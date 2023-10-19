const storeBtnPrev = document.querySelector('.store-swiper-wrapper .swiper-button-prev');
const storeBtnNext = document.querySelector('.store-swiper-wrapper .swiper-button-next');
let storeCurrentSlide = 0;
const storeItems = document.querySelectorAll('.store-swiper-wrapper .swiper-track .swiper-item');

storeBtnNext.addEventListener('click', () => {
    storeItems[storeCurrentSlide].classList.remove('store-swiper-active-item');
    storeCurrentSlide++;
    storeItems[storeCurrentSlide].classList.add('store-swiper-active-item');
    checkStoreBtns();
})

storeBtnPrev.addEventListener('click', () => {
    storeItems[storeCurrentSlide].classList.remove('store-swiper-active-item');
    storeCurrentSlide--;
    storeItems[storeCurrentSlide].classList.add('store-swiper-active-item');
    checkStoreBtns();
})

const checkStoreBtns = () => {
    const MIN_POS = 1;
    const MAX_POS = 2;
    storeBtnPrev.disabled = storeCurrentSlide < MIN_POS;
    storeBtnNext.disabled = storeCurrentSlide > MAX_POS;
}

checkStoreBtns();