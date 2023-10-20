
/*video-swiper script start*/

const videoBtnPrev = document.querySelector('.video-swiper-wrapper .swiper-button-prev');
const videoBtnNext = document.querySelector('.video-swiper-wrapper .swiper-button-next');
let videoCurrentSlide = 0;
const videoItems = document.querySelectorAll('.video-swiper-wrapper .container .swiper-track .swiper-item');

videoBtnNext.addEventListener('click', () => {
    videoItems[videoCurrentSlide].classList.remove('video-swiper-active-item');
    videoCurrentSlide++;
    checkVideoBtn();
    videoItems[videoCurrentSlide].classList.add('video-swiper-active-item');
})

const checkVideoBtn = () => {
    const FORBIDDEN_POS = 4;
    if (videoCurrentSlide === FORBIDDEN_POS) {
        videoItems[videoCurrentSlide - 1].classList.remove('video-swiper-active-item');
        videoCurrentSlide = 0;
        videoItems[videoCurrentSlide].classList.add('video-swiper-active-item');
    }
}

checkVideoBtn();

/*video-swiper script end*/