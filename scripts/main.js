const navItems = document.querySelectorAll('.navItem');
const navOpenBtn = document.querySelector('.navOpenBtn');
const navCloseBtn = document.querySelector('.navCloseBtn');
const nav = document.querySelector('.nav')


navOpenBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

navCloseBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const link = item.getAttribute('data-link');
    window.location.href = link;
  });
});

