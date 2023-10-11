const btns = document.querySelectorAll('.slide-menu__item')

const setActiveBtn = () => {
  btns.forEach((btn) => {
    btn.addEventListener('click', function () {
      const current = document.getElementsByClassName(
        'slide-menu__item--active'
      )
      current[0].className = current[0].className.replace(
        ' slide-menu__item--active',
        ''
      )
      this.className += ' slide-menu__item--active'
    })
  })
}
setActiveBtn()
