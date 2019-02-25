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

export default class {
  /**
   * 
   * @param {int} index  - index of 
   * @param {int} number -
   */
  draw(index, number) {
    this.clear(numberElements[index])
    shapes[number].forEach(column => {
      this.fill(numberElements[index], ...column)
    })
  }

  /**
   * Fills column based on which line indexes are chosen (0 is the top line).
   */
  fill(number, columnIndex, ...lineIndexes) {
    const column = number.getElementsByClassName('column')[columnIndex]
    lineIndexes.forEach(i => {
      column.getElementsByClassName('line')[i].classList.add('active')
    })
  }

  /**
   * Removes all active lines from number.
   */
  clear(number) {
    const lines = number.getElementsByClassName('line')
    for (let i = 0; i < lines.length; i++) {
      lines[i].classList.remove('active')
    }
  }
}