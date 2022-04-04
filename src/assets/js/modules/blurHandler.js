// Remove id attributes from copies

function removeIDs(parent) {
  parent.removeAttribute('id')

  const children = [...parent.children]

  if (children.length) {
    children.forEach(element => {
      element.removeAttribute('id')
      removeIDs(element)
    })
  }
}

// Whenever out page content scrolls, move the container

function moveContainerOnScroll(container) {
  window.addEventListener('scroll', function () {
    container.style.marginTop = `${-this.scrollY}px`
  })
}

// Handle blur on navMenu

function blurNavMenu() {
  // select the html elements we want to blur
  const blurTargets = document.querySelectorAll('[data-blur-target]')

  // create copies
  const copies = [...blurTargets].map(target => target.cloneNode(true))

  // remove IDs on copies
  copies.forEach(copy => removeIDs(copy))

  // place it inside a container-div
  const container = document.createElement('div')

  // apply blurring svg effect to the container
  container.classList.add('blurred-content')

  // place copies inside the container
  copies.forEach(duplicate => container.appendChild(duplicate))

  // place container inside the nav menu
  const navMenu = document.querySelector('#nav-menu')
  navMenu.appendChild(container)

  // apply scroll
  moveContainerOnScroll(container)
}

// Apply blur effects

function applyBlur() {
  blurNavMenu()
}

// Exports

export default applyBlur
