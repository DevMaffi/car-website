// Get nav elements

const navMenu = document.querySelector('#nav-menu')
const navToggle = document.querySelector('#nav-toggle')
const navClose = document.querySelector('#nav-close')
const navLinks = document.querySelectorAll('.nav__link')

// Event handlers

const show = () => navMenu.classList.add('show-menu')

const hide = () => navMenu.classList.remove('show-menu')

// Event listeners

function handleMenu() {
  navToggle?.addEventListener('click', show)
  navClose?.addEventListener('click', hide)

  navLinks.forEach(link => {
    link.addEventListener('click', hide)
  })
}

// Exports

export default handleMenu
