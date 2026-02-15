try {
  let burger_button = document.querySelector('.burger-container');
  let header = document.querySelector('.header');

  burger_button.addEventListener('click', function () {
    header.classList.toggle('menu-opened');
    document.body.classList.toggle('menu-opened');
  });

  let menu_items = document.querySelectorAll('.menu-item');

  menu_items.forEach((item) => {
    item.addEventListener('click', () => {
      header.classList.remove('menu-opened');
      document.body.classList.remove('menu-opened');
    });
  });
} catch (e) {
  console.error('New menu error :', e);
}
