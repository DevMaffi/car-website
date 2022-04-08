// Change background header

// this refers to window
function scrollHeader() {
  const header = document.querySelector('#header')

  // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}

// Handle scroll-up module representation

// this reefers to window
function showScrollUp() {
  const scrollUp = document.querySelector('#scroll-up')

  // when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) return scrollUp.classList.add('show-scroll')

  return scrollUp.classList.remove('show-scroll')
}

// Add event handlers on window

function handleScroll() {
  window.addEventListener('scroll', scrollHeader)
  window.addEventListener('scroll', showScrollUp)
}

// Exports

export default handleScroll
