const numbers = document.getElementsByClassName('number')

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

demo(0)

function demo(i) {
  setInterval(function() {
    draw(i, numbers[0])
    draw(i++, numbers[2])
    if (i == shapes.length) i = 0
  }, 500)
}

/**
 * Draws given number by filling each column individually.
 */
function draw(index, number) {
  clear(number)
  shapes[index].forEach(function(column) {
    fill(number, ...column)
  })
}

/**
 * Fills column based on which line indexes are chosen (0 is the top line).
 */
function fill(number, columnIndex, ...lineIndexes) {
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