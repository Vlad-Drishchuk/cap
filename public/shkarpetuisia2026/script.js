document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 3.5,
    // arrows: false,
    pagination: false,
    autoScroll: {
      speed: 4,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
  });

  splide.mount(Splide.Extensions);
});
