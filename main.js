// Mobile Navigation Menu
let navVisible = false
console.log(navVisible)
const mobileMenu = document.querySelector('#mobile-menu')
document.querySelector('#nav-trigger').addEventListener('click', ()=> {
  if (!navVisible) {
    mobileMenu.style.left = 0
    navVisible = true
    console.log(navVisible)
  } else {
    mobileMenu.style.left = '-200px'
    navVisible = false
    console.log(navVisible)
  }
})