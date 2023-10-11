const btn = document.querySelector('.read-more')
const btnText = btn.querySelector('.read-more__text')
const descr = document.querySelector('.content__descr')

let isShowAll = false

btn.addEventListener('click', function () {
  if (isShowAll) {
    btn.classList.remove('read-more--shown')
    btnText.textContent = 'Читать далее'
    isShowAll = false
    descr.classList.remove('content__descr--shown')
  } else {
    btn.classList.add('read-more--shown')
    btnText.textContent = 'Скрыть'
    isShowAll = true
    descr.classList.add('content__descr--shown')
  }
})
