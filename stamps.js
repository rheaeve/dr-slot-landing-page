let number = 0

const stamps = ['pound-sign.png', 'grapes.png', 'melon.png', 'cherries.png', 'clover.png']

const stampArea = document.querySelector('.stamps')

const placeStamp = function(x, y) {
  const stampImg = document.createElement('img')
  stampImg.setAttribute('src', stamps[number])
  stampImg.style.left = x + 'px'
  stampImg.style.top = y + 'px'

  stampArea.appendChild(stampImg)

  const sound = document.createElement('audio')
  sound.setAttribute('src', 'plop.mp3')
  sound.play()

  number = number + 1
  if (number > stamps.length - 1) {
    number = 0
  }
}

document.addEventListener('click', event => {
  placeStamp(event.pageX, event.pageY)
})
