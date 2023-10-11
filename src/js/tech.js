import { showElements, hideElements } from './brands.js'

const tech = document.querySelector('#tech')
const techSlides = tech.querySelectorAll('.swiper-slide')
const techBtn = tech.querySelector('.read-more')
const techBtnText = techBtn.querySelector('.read-more__text')

let isShowAll = false
hideElements(techSlides, isShowAll, true)
window.addEventListener('resize', () =>
  hideElements(techSlides, isShowAll, true)
)

techBtn.addEventListener('click', () => {
  if (isShowAll) {
    techBtn.classList.remove('read-more--shown')
    techBtnText.textContent = 'Показать все'
    isShowAll = false
    hideElements(techSlides, isShowAll, true)
  } else {
    techBtn.classList.add('read-more--shown')
    techBtnText.textContent = 'Скрыть'
    isShowAll = true
    showElements(techSlides)
  }
})
