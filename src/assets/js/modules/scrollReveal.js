// Modules

import ScrollReveal from 'scrollreveal'

// Init scroll reveal

const sr = new ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

// Apply scroll reveal animation on DOM

function applyReveal() {
  // home section
  sr.reveal('.home__title')
  sr.reveal('.home__subtitle', { delay: 500 })
  sr.reveal('.home__elec', { delay: 600 })
  sr.reveal('.home__img', { delay: 800 })
  sr.reveal('.home__car-data', {
    delay: 900,
    interval: 100,
    origin: 'bottom',
  })
  sr.reveal('.home__button', { delay: 900, origin: 'bottom' })

  // about section
  sr.reveal('.about__group', { origin: 'left' })
  sr.reveal('.about__data', { origin: 'right' })

  // popular section
  sr.reveal('.popular__container')

  // features section
  sr.reveal('.features__img')
  sr.reveal('.features__map', { delay: 600, origin: 'bottom' })
  sr.reveal('.features__card', { interval: 300 })

  // featured section
  sr.reveal('.featured__filters')
  sr.reveal('.featured__card', { interval: 100 })

  // offer section
  sr.reveal('.offer__data', { origin: 'left' })
  sr.reveal('.offer__img', { origin: 'right' })

  // logos section
  sr.reveal('.logos__content', { interval: 100 })

  // footer section
  sr.reveal('.footer__content', { interval: 100 })
}

// Exports

export default applyReveal
