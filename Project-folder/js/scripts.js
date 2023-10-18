/*header script start*/
(function () {
    const headerWrapper = document.querySelector('.header-wrapper');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            headerWrapper.classList.add('header_active');
            headerWrapper.style.paddingTop = "20px";
            headerWrapper.style.paddingBottom = "20px";
        }
        else
        {
            headerWrapper.classList.remove('header_active');
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
const introTrack = document.querySelector('.intro-swiper-track');
const introItems = document.querySelectorAll('.intro-swiper-item');
const introBtnPrev = document.querySelector('.intro-swiper-button-prev');
const introBtnNext = document.querySelector('.intro-swiper-button-next');
const introItemsCount = introItems.length;
const introItemWidth = introContainer.clientWidth / introSlidesToShow;
const introMovePosition = introSlidesToScroll * introItemWidth;

introItems.forEach((item) => {
    item.style.minWidth = `$(itemWidth)px`;
});

introBtnNext.addEventListener('click', () => {
    const itemsLeft = introItemsCount - (Math.abs(introSwiperPosition) + introSlidesToShow * introItemWidth) / introItemWidth;
    introSwiperPosition -= itemsLeft >= introSlidesToScroll ? introMovePosition : itemsLeft * introItemWidth;

    setPosition();
    checkBtns();
})

introBtnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(introSwiperPosition) / introItemWidth;
    introSwiperPosition += itemsLeft >= introSlidesToScroll ? introMovePosition : itemsLeft * introItemWidth;

    setPosition();
    checkBtns();
})

const setPosition = () => {
    introTrack.style.transform = `translateX(${introSwiperPosition}px)`;
}

const checkBtns = () => {
    introBtnPrev.disabled = introSwiperPosition === 0;
    introBtnNext.disabled = introSwiperPosition <= -(introItemsCount - introSlidesToShow) * introItemWidth;
}

checkBtns();

/*intro-swiper script end*/

/*video-swiper script start*/

const videoBtnPrev = document.querySelector('.video-swiper-button-prev');
const videoBtnNext = document.querySelector('.video-swiper-button-next');
let videoCurrentSlide = 1;
const videoItems = document.querySelectorAll('.video-swiper-item');


/*video-swiper script end*/

/*store-swiper script start*/



/*store-swiper script end*/