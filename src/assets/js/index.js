// Modules

// modules
import Swiper, { Pagination } from 'swiper'
import mixitup from 'mixitup'

import { handleScroll, handleMenu, handleBlur } from '@modules'

// styles
import 'swiper/css'
import 'swiper/css/pagination'
import '@sass/styles'

// Setup handlers

handleScroll()
handleMenu()
handleBlur()

// Swiper init

new Swiper('.popular__container', {
  modules: [Pagination],
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    768: { slidesPerView: 3 },
    1024: { spaceBetween: 48 },
  },
})

// Mixer init

mixitup('.featured__content', {
  selectors: {
    target: '.featured__card',
  },
  animation: {
    duration: 300,
  },
})
