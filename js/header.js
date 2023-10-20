(function () {
    const headerWrapper = document.querySelector('.header .wrapper ');
    window.onscroll = () => {
        if (window.scrollY > 50) {
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
