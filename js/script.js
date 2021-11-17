const menu = document.querySelector('.nav-list');
const btnMenu = document.querySelector('.btn-menu');
const iconMenu = document.querySelector('.btn-menu img');

function handleClick() {
  menu.classList.toggle('active');
  
  if(menu.classList.contains('active')) {
    iconMenu.setAttribute('src', 'images/icon-close.svg');
    
  }else {
    iconMenu.setAttribute('src', 'images/icon-hamburger.svg');
  }
}

btnMenu.addEventListener('click', handleClick);
