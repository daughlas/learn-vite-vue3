import { Matrix } from './martrix'
import { Fence } from './fence'
class FenceGroup {
  spu: Object
  fences: Array<Object> = []
  skuList: Array<Object>
  
  constructor(spu: Object) {
    this.spu = spu
    this.skuList = spu['sku_list']
    this.initFences()
  }

  initFences() :void {
    const matrix = this._createMatrix()
    const matrixT = matrix.transpose()
    matrixT.forEach(fence => {
      this.fences.push(new Fence(fence))
    })
  }

  _createMatrix() {
    let arr = []
    this.skuList.forEach((sku:any) => {
      arr.push(sku.specs)
    })
    return new Matrix(arr)
  }
}

export {
  FenceGroup
}