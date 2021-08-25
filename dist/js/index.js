$('[data-intro-slider]').slick({
  slidesToShow: 1,
  dots: true,
  arrows: false
});

const buttonMenu = document.querySelector('[data-button-menu]')
const menu = document.querySelector('[data-menu]')
const body = document.querySelector('body')

buttonMenu.addEventListener('click', toggleMenu)

function toggleMenu(){
  menu.classList.toggle('active')
  body.classList.toggle('overflow-hidden')
}