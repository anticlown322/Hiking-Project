/*header script start*/
(function () {
    const headerWrapper = document.querySelector('.header .wrapper ');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            headerWrapper.classList.add('header-active');
            headerWrapper.style.paddingTop = "20px";
            headerWrapper.style.paddingBottom = "20px";
        } else {
            headerWrapper.classList.remove('header-active');
            headerWrapper.style.paddingTop = "86px";
            headerWrapper.style.paddingBottom = "0";
        }
    }
}());
/*header script end*/

/*intro-swiper script start*/
let introSwiperPosition = 0;
const introSlidesToShow = 3;
const introSlidesToScroll = 1;
const introContainer = document.querySelector('.intro-swiper-container');
const introTrack = document.querySelector('.intro-swiper-container .swiper-track');
const introItems = document.querySelectorAll('.intro-swiper-container .swiper-track .swiper-item');
const introBtnPrev = document.querySelector('.intro-half-container .wrapper .swiper-button-prev');
const introBtnNext = document.querySelector('.intro-half-container .wrapper .swiper-button-next');
const introItemsCount = introItems.length;
const introItemWidth = introContainer.clientWidth / introSlidesToShow;
const introMovePosition = introSlidesToScroll * introItemWidth;

introItems.forEach((item) => {
    item.style.minWidth = `$(itemWidth)px`;
});

introBtnNext.addEventListener('click', () => {
    const itemsLeft = introItemsCount - (Math.abs(introSwiperPosition) + introSlidesToShow * introItemWidth) / introItemWidth;
    introSwiperPosition -= itemsLeft >= introSlidesToScroll ? introMovePosition : itemsLeft * introItemWidth;
    setIntroPosition();
    checkIntroBtns();
})

introBtnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(introSwiperPosition) / introItemWidth;
    introSwiperPosition += itemsLeft >= introSlidesToScroll ? introMovePosition : itemsLeft * introItemWidth;
    setIntroPosition();
    checkIntroBtns();
})

const setIntroPosition = () => {
    introTrack.style.transform = `translateX(${introSwiperPosition}px)`;
}

const checkIntroBtns = () => {
    introBtnPrev.disabled = introSwiperPosition === 0;
    introBtnNext.disabled = introSwiperPosition <= -(introItemsCount - introSlidesToShow) * introItemWidth;
}

checkIntroBtns();

/*intro-swiper script end*/

/*video-swiper script start*/

const videoBtnPrev = document.querySelector('.video-swiper-wrapper .swiper-button-prev');
const videoBtnNext = document.querySelector('.video-swiper-wrapper .swiper-button-next');
let videoCurrentSlide = 0;
const videoItems = document.querySelectorAll('.video-swiper-wrapper .container .swiper-track .swiper-item');

videoBtnNext.addEventListener('click', () => {
    videoItems[videoCurrentSlide].classList.remove('video-swiper-active-item');
    videoCurrentSlide++;
    videoItems[videoCurrentSlide].classList.add('video-swiper-active-item');
    checkVideoBtns();
})

videoBtnPrev.addEventListener('click', () => {
    videoItems[videoCurrentSlide].classList.remove('video-swiper-active-item');
    videoCurrentSlide--;
    videoItems[videoCurrentSlide].classList.add('video-swiper-active-item');
    checkVideoBtns();
})

const checkVideoBtns = () => {
    const MIN_POS = 1;
    const MAX_POS = 2;
    videoBtnPrev.disabled = videoCurrentSlide < MIN_POS;
    videoBtnNext.disabled = videoCurrentSlide > MAX_POS;
}

checkVideoBtns();

/*video-swiper script end*/

/*store-swiper script start*/

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

/*store-swiper script end*/