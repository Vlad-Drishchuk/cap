const desktopImages = [
    "img/photo1.jpeg",
    "img/photo2.jpeg",
    "img/photo3.jpeg"
];

const mobileImages = [
    "img/mobile1.jpeg",
    "img/mobile2.jpeg",
    "img/mobile3.jpeg",
    "img/mobile5.jpeg",
    "img/mobile6.jpeg"
];

// Вибираємо масив залежно від ширини екрану
let images = window.innerWidth <= 768 ? mobileImages : desktopImages;

let index = 0;
const layer1 = document.querySelector(".layer-1");
const layer2 = document.querySelector(".layer-2");

layer1.style.backgroundImage = `url(${images[0]})`;
layer2.style.backgroundImage = `url(${images[1]})`;

let showFirst = true;

setInterval(() => {
    index = (index + 1) % images.length;

    if(showFirst){
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
window.addEventListener("resize", () => {
    images = window.innerWidth <= 768 ? mobileImages : desktopImages;
});










// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

// дашборд
let interval = 3000;

// JavaScript: Використання Intersection Observer

// Отримуємо всі елементи з класом "num"
const numElements = document.querySelectorAll('.nums');

// Опції для Intersection Observer
const options = {
  root: null, // Вікно браузера буде використовуватися як область відстеження (viewport)
  rootMargin: '0px',
  threshold: 0.5, // Порогове значення відстеження (50% видимості елемента)
};

// Функція, яка буде викликатися, коли елемент потрапляє в область видимості
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Якщо елемент потрапив у область видимості
      const targetElement = entry.target;
      const endValue = parseInt(targetElement.getAttribute('data-val'));
      let startValue = 0;
      let duration = Math.floor(interval / endValue); // Встановіть бажаний час анімації (2000 мс - 2 секунди тут)

      let counter = setInterval(function () {
        startValue += 1;
        targetElement.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);

      // Відключаємо відстеження, щоб лічильник не запускався знову для цього елемента
      observer.unobserve(targetElement);
    }
  });
}

// Створюємо Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Додаємо всі елементи з класом "num" до Intersection Observer
numElements.forEach((element) => {
  observer.observe(element);
});

const burger = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');

burger.addEventListener('click', () => {
    navMobile.style.display = navMobile.style.display === 'flex' ? 'none' : 'flex';
});

