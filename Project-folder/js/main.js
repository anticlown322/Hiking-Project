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
}())

