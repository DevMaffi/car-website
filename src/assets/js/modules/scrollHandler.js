// Change background header

// this refers to window
function scrollHeader() {
  const header = document.querySelector('#header')

  // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}

// Add event handlers on window

function handleScroll() {
  window.addEventListener('scroll', scrollHeader)
}

// Exports

export default handleScroll
