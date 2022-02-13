class Heap {
  constructor() {
    this.data = []
  }
  // 向下调
  shiftDown(ind = 0) {
    let n = this.size() - 1
    while (ind * 2 + 1 <= n) {
      let tmp = ind
      // 小顶堆是用大于号 this.data[tmp] > this.data[ind * 2 + 1]， 大顶堆小于号 this.data[tmp] < this.data[ind * 2 + 1]
      if (this.data[tmp] > this.data[ind * 2 + 1]) tmp = ind * 2 + 1
      if (ind * 2 + 2 <= n && this.data[tmp] > this.data[ind * 2 + 2])
        tmp = ind * 2 + 2
      if (tmp === ind) break
      this.data[tmp] = [this.data[ind], (this.data[ind] = this.data[tmp])][0]
      ind = tmp
    }
  }
  // 向上调整
  shiftUp(idx) {
    let pIdx = null
    while (
      ((pIdx = Math.floor((idx - 1) / 2)),
      // 小顶堆是用大于号 this.data[pIdx] > this.data[idx], 大顶堆用小于号this.data[pIdx] < this.data[idx]
      idx && this.data[pIdx] > this.data[idx])
    ) {
      this.data[pIdx] = [this.data[idx], (this.data[idx] = this.data[pIdx])][0]
      idx = pIdx
    }
  }
  push(val) {
    this.data.push(val)
    this.shiftUp(this.size() - 1)
  }
  pop() {
    if (this.size() === 0) return
    if (this.size() === 1) {
      return this.data.pop()
    }
    this.data[0] = this.data.pop()
    this.shiftDown(0)
  }
  top() {
    return this.data[0]
  }
  size() {
    return this.data.length
  }
}

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let heap = new Heap()
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
