$(function () {
  $("#albun-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $("#arrow-prev"),
    nextArrow: $("#arrow-next"),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
