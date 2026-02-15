const desktopImages = ['img/photo1.jpeg', 'img/photo2.jpeg', 'img/photo3.jpeg'];

const mobileImages = [
  'img/mobile1.jpeg',
  'img/mobile2.jpeg',
  'img/mobile3.jpeg',
  'img/mobile5.jpeg',
  'img/mobile6.jpeg',
];

try {
  // Вибираємо масив залежно від ширини екрану
  let images = window.innerWidth <= 768 ? mobileImages : desktopImages;

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
    images = window.innerWidth <= 768 ? mobileImages : desktopImages;
  });
} catch (e) {
  console.error('Помилка обробки картинок', e);
}

try {
  // Найти все ссылки начинающиеся на #
  const anchors = document.querySelectorAll('a[href^="#"]');

  // Цикл по всем ссылкам
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Предотвратить стандартное поведение ссылок
      // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
      const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
      // Плавная прокрутка до элемента с id = href у ссылки
      document.querySelector(goto).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
} catch (e) {
  console.error('Помилка посилань', e);
}

document.addEventListener("DOMContentLoaded", function () {

  const animationDuration = 2000; // 3000 мс = 3 секунди
  const numElements = document.querySelectorAll('.nums');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
function animateValue(element, endValue) {
  let startTimestamp = null;

  function step(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;

    const progress = timestamp - startTimestamp;

    const progressRatio = 1 - Math.pow(
      1 - Math.min(progress / animationDuration, 1),
      3
    );

    const currentValue = Math.floor(progressRatio * endValue);
    const formattedValue = currentValue.toLocaleString('uk-UA');

    // 👇 ОНОВЛЮЄМО ОБИДВА
    element.textContent = formattedValue;
    element.setAttribute('data-text', formattedValue);

    if (progress < animationDuration) {
      requestAnimationFrame(step);
    } else {
      const finalValue = endValue.toLocaleString('uk-UA');
      element.textContent = finalValue;
      element.setAttribute('data-text', finalValue);
    }
  }

  requestAnimationFrame(step);
}


  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const endValue = parseInt(targetElement.getAttribute('data-val'), 10);

        animateValue(targetElement, endValue);
        observer.unobserve(targetElement);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  numElements.forEach(el => observer.observe(el));

});

try {
  const burger = document.getElementById('burger');
  const navMobile = document.getElementById('navMobile');

  burger.addEventListener('click', () => {
    navMobile.style.display = navMobile.style.display === 'flex' ? 'none' : 'flex';
  });
} catch (e) {
  console.error('Помилка старого меню', e);
}
