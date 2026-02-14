let burger = document.querySelector('.burger-container');
let header = document.querySelector('.header');

console.log(burger);
burger.addEventListener('click', function () {
  console.log('Clicked');
  header.classList.toggle('menu-opened');
});
