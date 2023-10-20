let introSwiperPosition = 0;
let introCurrentSlide = 1;
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
    introItems[introCurrentSlide].classList.remove('intro-swiper-active-item');
    introCurrentSlide++;
    checkIntroBtns();
})

introBtnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(introSwiperPosition) / introItemWidth;
    introSwiperPosition += itemsLeft >= introSlidesToScroll ? introMovePosition : itemsLeft * introItemWidth;
    setIntroPosition();
    introItems[introCurrentSlide].classList.remove('intro-swiper-active-item');
    introCurrentSlide--;
    checkIntroBtns();
})

const setIntroPosition = () => {
    introTrack.style.transform = `translateX(${introSwiperPosition}px)`;
}

const checkIntroBtns = () => {
    introBtnPrev.disabled = introCurrentSlide === 1;
    introBtnNext.disabled = introCurrentSlide === 5;
    introItems[introCurrentSlide].classList.add('intro-swiper-active-item');
}

checkIntroBtns();
