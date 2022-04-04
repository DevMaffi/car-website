// Modules

// modules
import { handleScroll, handleMenu, applyBlur } from '@modules'

// styles
import '@sass/styles'

// Setup handlers

handleScroll()
handleMenu()

// apply blur handler for browsers not support backdrop-filter
if (!CSS.supports('backdrop-filter', 'blur()')) {
  applyBlur()
}
