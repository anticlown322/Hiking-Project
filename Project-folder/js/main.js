(function () {
    const headerWrapper = document.querySelector('.header-wrapper');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            headerWrapper.classList.add('header_active');
        }
        else
        {
            headerWrapper.classList.remove('header_active');
        }
    }
}())