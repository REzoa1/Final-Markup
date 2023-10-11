const body = document.querySelector('.body')
const overlay = body.querySelector('.sidebar-overlay')

const menuBtn = document.getElementById('menu-btn')
const phoneBtns = document.querySelectorAll('.nav__item--phone')
const chatBtns = document.querySelectorAll('.nav__item--chat')

const closeSideBar = (sidebar) => {
  body.classList.remove('body--hidden')
  overlay.classList.remove('sidebar-overlay--shown')
  sidebar.classList.remove('sidebar--visible')
}

const openSideBar = (sidebar) => {
  const openMenu = document.querySelector('.sidebar--visible')
  if (openMenu) {
    openMenu.classList.remove('sidebar--visible')
  }

  body.classList.add('body--hidden')
  overlay.classList.add('sidebar-overlay--shown')
  sidebar.classList.add('sidebar--visible')
}

const btnHandler = (menuName) => {
  const menu = document.querySelector(menuName)
  const closeBtn = menu.querySelector('.nav__item--close')

  openSideBar(menu)

  overlay.addEventListener('click', () => closeSideBar(menu))

  closeBtn.addEventListener('click', () => closeSideBar(menu))
}

menuBtn.addEventListener('click', () => btnHandler('.sidebar--left'))

phoneBtns.forEach((btn) =>
  btn.addEventListener('click', () => btnHandler('#call'))
)

chatBtns.forEach((btn) =>
  btn.addEventListener('click', () => btnHandler('#feedback'))
)
