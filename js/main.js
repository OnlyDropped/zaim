$(function () {
  $('.slider').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/mfo/prev-arrow.svg" alt="prev-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/mfo/next-arrow.svg" alt="next-arrow"></button>',
    //arrow: false
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    //dots: true,
    //infinite: true,
    //cssEase: 'linear'
  });
  $('.header__btn').on('click', function() {
    $('.header__nav').toggleClass('header__nav--active');
  });
  $('.header__btn').on('click', function () {
    $('.header__menu').toggleClass('header__menu--active');
  });
  
});