const number = document.getElementsByClassName('number')[0]

const numbers = [
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
    draw(i++)
    if (i == numbers.length) i = 0
  }, 500)
}

/**
 * Draws given number by filling each column individually.
 */
function draw(index) {
  clear()
  numbers[index].forEach(function(column) {
    fill(...column)
  })
}

/**
 * Fills column based on which line indexes are chosen (0 is the top line).
 */
function fill(columnIndex, ...lineIndexes) {
  const column = document.getElementsByClassName('column')[columnIndex]
  lineIndexes.forEach(i => {
    column.getElementsByClassName('line')[i].classList.add('active')
  })
}

/**
 * Removes all active lines from number.
 */
function clear() {
  const lines = number.getElementsByClassName('line')
  for (let i = 0; i < lines.length; i++) {
    lines[i].classList.remove('active')
  }
}