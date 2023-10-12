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
let swiperPosition = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.intro-swiper-container');
const track = document.querySelector('.intro-swiper-track');
const items = document.querySelectorAll('.swiper-item');
const btnPrev = document.querySelector('.swiper-button-prev');
const btnNext = document.querySelector('.swiper-button-next');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `$(itemWidth)px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(swiperPosition) + slidesToShow * itemWidth) / itemWidth;
    swiperPosition -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
})

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(swiperPosition) / itemWidth;
    swiperPosition += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
})

const setPosition = () => {
    track.style.transform = `translateX(${swiperPosition}px)`;
}

const checkBtns = () => {
    btnPrev.disabled = swiperPosition === 0;
    btnNext.disabled = swiperPosition <= -(itemsCount - slidesToShow) * itemWidth;
}

checkBtns();

/*intro-swiper script end*/