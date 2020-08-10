import { Cell } from "./cell"

class Fence {
  specs
  cells = []
  title

  constructor(specs) {
    specs.forEach(spec => {
      this.cells.push(new Cell(spec))
    })
    this.title = specs[0].key
  }
}

export {
  Fence
}