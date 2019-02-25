require('../scss/main.scss')

const numberElements = document.getElementsByClassName('number')

// instructions for filling each shape
const shapes = [
  [ [0, 0, 1], [1, 0, 2], [2, 0, 1] ],
  [ [2, 0, 1] ],
  [ [0, 1], [1, 0, 1, 2], [2, 0] ],
  [ [1, 0, 1, 2], [2, 0, 1] ],
  [ [0, 0], [1, 1], [2, 0, 1] ],
  [ [0, 0], [1, 0, 1, 2], [2, 1] ],
  [ [0, 0, 1], [1, 0, 1, 2], [2, 1] ],
  [ [1, 0], [2, 0, 1]],
  [ [0, 0, 1], [1, 0, 1, 2], [2, 0, 1] ],
  [ [0, 0], [1, 0, 1, 2], [2, 0, 1]]
]

let date = new Date()
let hour = date.getHours() % 12 ? date.getHours() % 12 : 12
if (hour > 9) {
  draw(0, 1)
  draw(0, hour % 12)
}
else {
  draw(0, 0)
  draw(1, hour)
}
let minute = date.getMinutes()
if (minute == 0) {
  draw(2, 0)
  draw(3, 0)
}
else if(minute < 10) {
  draw(2, 0)
  draw(3, minute)
}
else {
  draw(2, Math.floor(minute / 10))
  draw(3, minute % 10)
}

/**
 * Draws given number by filling each column individually.
 */
function draw(index, number) {
  clear(numberElements[index])
  shapes[number].forEach(function(column) {
    fill(numberElements[index], ...column)
  })
}

/**
 * Fills column based on which line indexes are chosen (0 is the top line).
 */
function fill(number, columnIndex, ...lineIndexes) {
  console.log(number)
  const column = number.getElementsByClassName('column')[columnIndex]
  lineIndexes.forEach(i => {
    column.getElementsByClassName('line')[i].classList.add('active')
  })
}

/**
 * Removes all active lines from number.
 */
function clear(number) {
  const lines = number.getElementsByClassName('line')
  for (let i = 0; i < lines.length; i++) {
    lines[i].classList.remove('active')
  }
}