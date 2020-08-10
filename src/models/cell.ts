class Cell {
  spec: Object
  title
  id
  status

  constructor(spec) {
    this.spec = spec
    console.log(this.spec)
    this.title = spec.value
    this.id = spec.value_id
  }
}

export {
  Cell
}