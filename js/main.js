function playScroll() {
    document.documentElement.classList.remove('fixed')
  }
function stopScroll() {
    document.documentElement.classList.add('fixed')
  }
  
  // 헤더 메뉴 토글! [모바일]
const headerEl = document.querySelector('header')
const menuStarterEl = document.querySelector('header .menu-starter')
  menuStarterEl.addEventListener('click', () => {
    if (headerEl.classList.contains('menuing')) {
      headerEl.classList.remove('menuing')
      playScroll()
    } else {
      headerEl.classList.add('menuing')
      stopScroll()
    }
  })

//
const navEl = document.querySelector('nav')
const navMenuTogglerEl = navEl.querySelector('.menu-toggler')
const navMenuShadowEl = navEl.querySelector('.shadow')

navMenuTogglerEl.addEventListener('click', function () {
  if (navEl.classList.contains('menuing')) {
    hideNavMenu()
  } else {
    showNavMenu()
  }
})
navEl.addEventListener('click', function (event) {
  event.stopPropagation()
})
navMenuShadowEl.addEventListener('click', hideNavMenu)
window.addEventListener('click', hideNavMenu)
function showNavMenu() {
  navEl.classList.add('menuing')
}
function hideNavMenu() {
  navEl.classList.remove('menuing')
}
