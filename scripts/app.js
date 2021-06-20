function init() {
  const burger = document.querySelector('.navbar-burger')
  const menu = document.querySelector('.navbar-menu')
  
  let navOpen = true

  function toggleNavbar() {
    if (navOpen === true) {
      burger.classList.add('is-active')
      menu.classList.add('is-active')
    } else {
      burger.classList.remove('is-active')
      menu.classList.remove('is-active')
    }
    navOpen = !navOpen
  }

  burger.addEventListener('click', toggleNavbar)
  menu.addEventListener('click', toggleNavbar)
}

window.addEventListener('DOMContentLoaded', init)

