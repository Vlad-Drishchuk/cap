document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 3.5,
    gap: '20px',
    arrows: false,
    pagination: false,
    autoScroll: {
      speed: 1,           // менше = повільніше
      pauseOnHover: false,
      pauseOnFocus: false,
    },
  });

  splide.mount(window.splide.Extensions);
});
