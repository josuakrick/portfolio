const navLink = document.querySelectorAll('.link');
const section = document.querySelectorAll('section');




section[0].classList.add('show');

function activePage(index) {
  section.forEach((item) => {
    item.classList.remove('show');
  });
  section[index].classList.add('show');
};


navLink[0].classList.add('animation');

function animation(index) {
  navLink.forEach((item) => {
    item.classList.remove('animation');
  });
  navLink[index].classList.add('animation');
};

navLink.forEach((item, index) => {
  item.addEventListener('click', () => {
    animation(index)
    activePage(index);
  });
});






