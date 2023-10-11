;(function () {
  var throttle = function (type, name, obj) {
    obj = obj || window
    var running = false
    var func = function () {
      if (running) {
        return
      }
      running = true
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name))
        running = false
      })
    }
    obj.addEventListener(type, func)
  }

  throttle('resize', 'optimizedResize')
})()

const sliders = document.querySelectorAll('.swiper')

let mySwipers = []

function sliderinit() {
  sliders.forEach((slider, index) => {
    if (!slider.swiper) {
      mySwipers[index] = new Swiper(slider, {
        direction: 'horizontal',
        loop: true,
        allowTouchMove: true,
        watchSlidesProgress: true,
        pagination: {
          clickable: true,
          el: '.swiper-pagination'
        },
        spaceBetween: 16,
        slidesPerView: 'auto'
      })
    } else {
      return
    }
  })
}

function sliderDestroy() {
  sliders.forEach((slider, index) => {
    if (slider.swiper) mySwipers[index].destroy(true, true)
  })
}

function checker() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    sliderDestroy()
  } else {
    sliderinit()
  }
}

checker()
window.addEventListener('optimizedResize', () => {
  checker()
})
