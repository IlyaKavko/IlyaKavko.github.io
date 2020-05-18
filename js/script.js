let mySlider = document.querySelector('.custom_slider');
mySlider.customSlider({
    slideWidth: 300,
    slideHeight: 300,
    maxSlides: 1,
    navs: true,
    loop: true,
    autoplay: true,
    timeout: 4000,
    margin: 10,
    delay: 300,
    onHover: true,
    dots: true,
});
