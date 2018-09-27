document.addEventListener("DOMContentLoaded", function () {
  let grid = document.getElementById("grid")
  let container = document.getElementById("container")
  let pixels = 24
  let colorNames = ["red", "orange", "yellow", "green", "blue", "purple", "black", "white", "gray", "SaddleBrown"]
  let currentColor = ""
  let cell, row, col, colorCell, indicator

  // pixels * width of each pixel (20px) + (pixels + 1) * border (1px) = total grid size
  grid.style.width = (pixels * 21 + 1) + "px"
  grid.style.height = (pixels * 21 + 1) + "px"
  container.style.width = (pixels * 21 + 50) + "px"

  function changeColor(event) {
    if (event.target.className === "cell") {
      event.target.style.backgroundColor = currentColor
    }
  }

  function selectColor(event) {
    currentColor = event.target.style.backgroundColor
    indicator.style.backgroundColor = currentColor
  }

  function makeGrid() {
    for (let rows = 0; rows < pixels; rows++) {
      row = document.createElement("div")
      row.className = "row"

      for (let cols = 0; cols < pixels; cols++) {
        cell = document.createElement("div")
        cell.className = "cell"

        if (rows === 0) {
          cell.style.borderTop = "1px solid black"
        }
        if (cols === 0) {
          cell.style.borderLeft = "1px solid black"
        }

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
  palette.appendChild(indicator)
})
