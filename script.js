document.addEventListener("DOMContentLoaded", function () {
  let grid = document.getElementById("grid")
  let gridSize = 24
  let colorNames = ["red", "orange", "yellow", "green", "blue", "purple", "black", "white", "SaddleBrown"]
  let currentColor = ""
  let cell, row, col, colorCell, indicator

  function changeColor(event) {
    event.target.style.backgroundColor = currentColor
  }

  function selectColor(event) {
    currentColor = event.target.style.backgroundColor
    indicator.style.backgroundColor = currentColor
  }

  function makeGrid() {
    for (let rows = 0; rows < gridSize; rows++) {
      row = document.createElement("div")
      row.className = "row"
      // row.style.height = 100/gridSize + "%"
      for (let cols = 0; cols < gridSize; cols++) {
        cell = document.createElement("div")
        cell.className = "cell"

        // if (rows === 0) {
        //   cell.style.borderTop = "1px solid black"
        // }
        // if (cols === 0) {
        //   cell.style.borderLeft = "1px solid black"
        // }

        // cell.style.width = 100/gridSize + "%"
        row.appendChild(cell)
      }
      grid.appendChild(row)
    }
    grid.addEventListener("click", changeColor)
  }

  function makePalette(colors) {
    for (let i = 0; i < colors.length; i++) {
      palette = document.getElementById("palette")
      colorCell = document.createElement("div")
      colorCell.className = "color"
      colorCell.style.backgroundColor = colors[i]
      colorCell.addEventListener("click", selectColor)
      palette.appendChild(colorCell)
    }
  }

  makeGrid()
  makePalette(colorNames)

  indicator = document.createElement("div")
  indicator.className = "indicator"
  indicator.textContent = "current color"
  palette.appendChild(indicator)
})
