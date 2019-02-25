require('../scss/main.scss')

import Clock from './clock'
const clock = new Clock()

function updateTime() {
  let date = new Date()
  let hour = date.getHours() % 12 ? date.getHours() % 12 : 12
  if (hour > 9) {
    clock.draw(0, 1)
    clock.draw(0, hour % 12)
  }
  else {
    clock.draw(0, 0)
    clock.draw(1, hour)
  }
  drawSixty(date.getMinutes(), 2, 3)
  drawSixty(date.getSeconds(), 4, 5)
}

function drawSixty(value, first, second) {
  if (value == 0) {
    clock.draw(first, 0)
    clock.draw(second, 0)
  }
  else if(value < 10) {
    clock.draw(first, 0)
    clock.draw(second, value)
  }
  else {
    clock.draw(first, Math.floor(value / 10))
    clock.draw(second, value % 10)
  }
}

setInterval(updateTime, 500)