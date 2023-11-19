const brands = document.getElementById('brands')
const brandsSlides = brands.querySelectorAll('.swiper-slide')
const brandsBtn = brands.querySelector('.read-more')

let isShowAll = false

const showElements = arr => arr.forEach((el) => el.classList.remove('hidden'))

const hideFrom = (num, arr) => {
  showElements(arr)

  arr.forEach((el, i) => i >= num && el.classList.add('hidden'))
}

const hideElements = (slides, isShowAll, isOneLine = false) => {
  const fromMd = isOneLine ? 3 : 6
  const fromLg = isOneLine ? 4 : 8

  if (!isShowAll && window.innerWidth >= 768) {
    if (window.innerWidth >= 1366) {
      hideFrom(fromLg, slides)
    } else {
      hideFrom(fromMd, slides)
    }
  } else {
    showElements(slides)
  }
}

const btnHandler = (btn, slides) => {
  const btnText = btn.querySelector('.read-more__text')

  if (isShowAll) {
    btn.classList.remove('read-more--shown')
    btnText.textContent = 'Показать все'
    isShowAll = false
    hideElements(slides, isShowAll)
  } else {
    btn.classList.add('read-more--shown')
    btnText.textContent = 'Скрыть'
    isShowAll = true
    showElements(slides)
  }
}

hideElements(brandsSlides, isShowAll)
window.addEventListener('resize', () => hideElements(brandsSlides, isShowAll))

brandsBtn.addEventListener('click', () => btnHandler(brandsBtn, brandsSlides))

export { showElements, hideElements }
