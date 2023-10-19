
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