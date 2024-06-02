const menuBtns = document.querySelectorAll('.js-menu-btn');
const menuEl = document.querySelector('.menu-container');

menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    menuEl.classList.toggle('is-open');
  });
});

// const menuBtnsm = document.querySelectorAll('.menu-btn');
// const menuElm = document.querySelector('.modal-overlay');

// menuBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     menuEl.classList.toggle('is-open');
//   });
// });