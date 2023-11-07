$(document).ready(function(){
  $('.slickSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '',
    nextArrow: ''
  });
});
$('.projectsSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '',
  nextArrow: '',
  responsive: [
    {
      breakpoint: 440, // Set the breakpoint at 440px
      settings: {
        slidesToShow: 1, // Show only one image at this breakpoint
        slidesToScroll: 1
      }
    }
  ]
});