// Mobile Navigation Menu
let navVisible = false
const hamburger = document.querySelector('#hamburger')
console.log(navVisible)
const mobileMenu = document.querySelector('#mobile-menu')
document.querySelector('#nav-trigger').addEventListener('click', ()=> {
  if (!navVisible) {
    mobileMenu.style.left = 0
    navVisible = true
    hamburger.innerText = 'arrow_back_ios'
    console.log(navVisible)
  } else {
    mobileMenu.style.left = '-200px'
    navVisible = false
    hamburger.innerText = 'menu'
    console.log(navVisible)
  }
})