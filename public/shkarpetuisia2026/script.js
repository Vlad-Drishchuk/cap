const desktopImages = [
  'https://firebasestorage.googleapis.com/v0/b/capernaum-ua.appspot.com/o/%D0%A8%D0%BA%D0%B0%D1%80%D0%BF%D0%B5%D1%82%D1%83%D0%B9%D1%81%D1%8F%2FIMG_0188%C2%A0%E2%80%94%20%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B5.jpeg?alt=media&token=5e24ea95-0b55-4611-9d40-4ba58c0dd2f7', 
  'https://firebasestorage.googleapis.com/v0/b/capernaum-ua.appspot.com/o/%D0%A8%D0%BA%D0%B0%D1%80%D0%BF%D0%B5%D1%82%D1%83%D0%B9%D1%81%D1%8F%2FDSC06397%C2%A0%E2%80%94%20%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B5.jpeg?alt=media&token=d006f534-decc-41ab-91fd-5a7043c6902b', 
  'https://firebasestorage.googleapis.com/v0/b/capernaum-ua.appspot.com/o/%D0%A8%D0%BA%D0%B0%D1%80%D0%BF%D0%B5%D1%82%D1%83%D0%B9%D1%81%D1%8F%2FIMG_0190%C2%A0%E2%80%94%20%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B5.jpeg?alt=media&token=ca9bab02-6a20-4133-b06d-7d49be45aaae',
  'https://firebasestorage.googleapis.com/v0/b/capernaum-ua.appspot.com/o/%D0%A8%D0%BA%D0%B0%D1%80%D0%BF%D0%B5%D1%82%D1%83%D0%B9%D1%81%D1%8F%2FIMG_0247%C2%A0%E2%80%94%20%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B5.jpeg?alt=media&token=edad4dbe-8233-4eff-aca5-d147a04f9c85',
  'https://firebasestorage.googleapis.com/v0/b/capernaum-ua.appspot.com/o/%D0%A8%D0%BA%D0%B0%D1%80%D0%BF%D0%B5%D1%82%D1%83%D0%B9%D1%81%D1%8F%2FIMG_0431%C2%A0%E2%80%94%20%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B5.jpeg?alt=media&token=61587920-5a34-4051-aba9-0a0cc4f3ab64',
  'https://firebasestorage.googleapis.com/v0/b/capernaum-ua.appspot.com/o/%D0%A8%D0%BA%D0%B0%D1%80%D0%BF%D0%B5%D1%82%D1%83%D0%B9%D1%81%D1%8F%2FIMG_0564%C2%A0%E2%80%94%20%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B5.jpeg?alt=media&token=90645b71-e709-4416-af08-0df08e9b24ef',
  'https://firebasestorage.googleapis.com/v0/b/capernaum-ua.appspot.com/o/%D0%A8%D0%BA%D0%B0%D1%80%D0%BF%D0%B5%D1%82%D1%83%D0%B9%D1%81%D1%8F%2FIMG_4271%C2%A0%E2%80%94%20%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B5.jpeg?alt=media&token=23c1973e-5298-405d-ba28-33b3a9573d33'
];


try {
  // Вибираємо масив залежно від ширини екрану
  let images = window.innerWidth <= 768 ? desktopImages : desktopImages;

  let index = 0;
  const layer1 = document.querySelector('.layer-1');
  const layer2 = document.querySelector('.layer-2');

  layer1.style.backgroundImage = `url(${images[0]})`;
  layer2.style.backgroundImage = `url(${images[1]})`;

  let showFirst = true;

  setInterval(() => {
    index = (index + 1) % images.length;

    if (showFirst) {
      layer2.style.backgroundImage = `url(${images[index]})`;
      layer2.style.opacity = 1;
      layer1.style.opacity = 0;
    } else {
      layer1.style.backgroundImage = `url(${images[index]})`;
      layer1.style.opacity = 1;
      layer2.style.opacity = 0;
    }

    showFirst = !showFirst;
  }, 4000);

  // Додатково можна слухати зміну розміру вікна
  window.addEventListener('resize', () => {
    images = window.innerWidth <= 768 ? desktopImages : desktopImages;
  });
} catch (e) {
  console.error('Помилка обробки картинок', e);
}









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
