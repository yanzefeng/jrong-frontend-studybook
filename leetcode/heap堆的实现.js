// class Heap {
//   constructor(heapType) {
//     // 0是小顶堆，1是大顶堆
//     this.heapType = heapType || 0
//     this.data = []
//   }
//   // getTep(ind) {}
//   // 向下调
//   shiftDown(ind = 0) {
//     let n = this.size() - 1
//     while (ind * 2 + 1 <= n) {
//       let tmp = ind
//       // 小顶堆是用大于号 this.data[tmp] > this.data[ind * 2 + 1]， 大顶堆小于号 this.data[tmp] < this.data[ind * 2 + 1]
//       if (this.heapType === 0) {
//         if (this.data[tmp] > this.data[ind * 2 + 1]) tmp = ind * 2 + 1
//         if (ind * 2 + 2 <= n && this.data[tmp] > this.data[ind * 2 + 2])
//           tmp = ind * 2 + 2
//       } else {
//         if (this.data[tmp] < this.data[ind * 2 + 1]) tmp = ind * 2 + 1
//         if (ind * 2 + 2 <= n && this.data[tmp] < this.data[ind * 2 + 2])
//           tmp = ind * 2 + 2
//       }
//       if (tmp === ind) break
//       this.data[tmp] = [this.data[ind], (this.data[ind] = this.data[tmp])][0]
//       ind = tmp
//     }
//   }
//   // 向上调整
//   shiftUp(idx) {
//     let pIdx = null
//     if (this.heapType === 0) {
//       while (
//         ((pIdx = Math.floor((idx - 1) / 2)),
//         // 小顶堆是用大于号 this.data[pIdx] > this.data[idx], 大顶堆用小于号this.data[pIdx] < this.data[idx]
//         idx && this.data[pIdx] > this.data[idx])
//       ) {
//         this.data[pIdx] = [this.data[idx], (this.data[idx] = this.data[pIdx])][0]
//         idx = pIdx
//       }
//     } else {
//       while (
//         ((pIdx = Math.floor((idx - 1) / 2)),
//         // 小顶堆是用大于号 this.data[pIdx] > this.data[idx], 大顶堆用小于号this.data[pIdx] < this.data[idx]
//         idx && this.data[pIdx] < this.data[idx])
//       ) {
//         this.data[pIdx] = [this.data[idx], (this.data[idx] = this.data[pIdx])][0]
//         idx = pIdx
//       }
//     }

//   }
//   push(val) {
//     this.data.push(val)
//     this.shiftUp(this.size() - 1)
//   }
//   pop() {
//     if (this.size() === 0) return
//     if (this.size() === 1) {
//       return this.data.pop()
//     }
//     this.data[0] = this.data.pop()
//     this.shiftDown(0)
//   }
//   top() {
//     return this.data[0]
//   }
//   size() {
//     return this.data.length
//   }
// }

class Heap {
  constructor() {
    this.data = []
  }
  size() {
    return this.data.length
  }
  swap(ind1, ind2) {
    ;[this.data[ind1], this.data[ind2]] = [this.data[ind2], this.data[ind1]]
  }
  shiftUp() {
    // 要找到父级 2 * i + 1 左孩子，  2 * i + 2右孩子  所以父节点的下标是 (ind - 1) / 2 或者 (ind - 2) /2
    let ind = this.size() - 1
    let pInd = null
    // 找到父级后就要往上调整了 小顶堆 父级元素比当前元素大就要交换位置
    while (
      ((pInd = Math.floor((ind - 1) / 2)),
      ind && this.data[pInd] > this.data[ind])
    ) {
      this.swap(pInd, ind)
      ind = pInd
    }
  }
  push(val) {
    // 尾部入队，向上调整
    this.data.push(val)
    this.shiftUp()
  }
  shiftDown() {
    // 向下调整 找到三个节点中的最小值然后交换
    // let tmp = 0
    let ind = 0
    // 数组的最大长度
    let n = this.size() - 1
    // 循环条件是左孩子的下标不越界
    while (ind * 2 + 1 <= n) {
      let tmp = ind
      // 判断父节点的值是否比左边孩子的节点值大，如果是存储来下标
      if (this.data[ind] > this.data[ind * 2 + 1]) tmp = ind * 2 + 1
      // 先判断右边下标不越界
      if (ind * 2 + 2 <= n && this.data[tmp] > this.data[ind * 2 + 2])
        tmp = ind * 2 + 2
      // 如果是下标一样说明是不用调整了，已经是最小值
      if (ind === tmp) break
      this.swap(ind, tmp)
      ind = tmp
    }
  }
  pop() {
    // 弹出就是元素的头部出队，然后把尾部元素放到头部中
    if (!this.size()) return
    let res = this.top()
    if (this.size() === 1) return this.data.pop()
    this.data[0] = this.data.pop()
    this.shiftDown()
    return res
  }
  top() {
    if (this.size() === 0) return
    return this.data[0]
  }
}

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let heap = new Heap(0)
// 监听键入回车事件
rl.on('line', (str) => {
  // str即为输入的内容
  if (str === 'close') {
    // 关闭逐行读取流 会触发关闭事件
    rl.close()
  }
  const [opr, val] = str.split(' ')
  if (opr === '0') {
    heap.push(+val)
  } else {
    heap.pop()
  }
  let arr = heap.data
  console.log(arr)
})

// 监听关闭事件
rl.on('close', () => {
  console.log('触发了关闭事件')
})
