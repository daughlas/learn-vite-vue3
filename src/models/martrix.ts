class Matrix {
  m: Array<Array<Object>>

  constructor(m) {
    this.m = m
  }

  // 转置
  transpose() {
    const cols = this.m[0].length
    const rows= this.m.length
    let target = []
    for (let j = 0; j < cols; j++) {
      target[j] = []
      for (let i = 0; i < rows; i++) {
        target[j][i] = this.m[i][j]
      }
    }
    return target
  }
}

export {
  Matrix
}