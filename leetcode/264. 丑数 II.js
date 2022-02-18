/**
 * @param {number} n
 * @return {number}
 */
 class Heap {
  constructor(heapType) {
    // 0是小顶堆，1是大顶堆
    this.heapType = heapType || 0
    this.data = []
  }
  // getTep(ind) {}
  // 向下调
  shiftDown(ind = 0) {
    let n = this.size() - 1
    while (ind * 2 + 1 <= n) {
      let tmp = ind
      // 小顶堆是用大于号 this.data[tmp] > this.data[ind * 2 + 1]， 大顶堆小于号 this.data[tmp] < this.data[ind * 2 + 1]
      if (this.heapType === 0) {
        if (this.data[tmp] > this.data[ind * 2 + 1]) tmp = ind * 2 + 1
        if (ind * 2 + 2 <= n && this.data[tmp] > this.data[ind * 2 + 2])
          tmp = ind * 2 + 2
      } else {
        if (this.data[tmp] < this.data[ind * 2 + 1]) tmp = ind * 2 + 1
        if (ind * 2 + 2 <= n && this.data[tmp] < this.data[ind * 2 + 2])
          tmp = ind * 2 + 2
      }
      if (tmp === ind) break
      this.data[tmp] = [this.data[ind], (this.data[ind] = this.data[tmp])][0]
      ind = tmp
    }
  }
  // 向上调整
  shiftUp(idx) {
    let pIdx = null
    if (this.heapType === 0) {
      while (
        ((pIdx = Math.floor((idx - 1) / 2)),
        // 小顶堆是用大于号 this.data[pIdx] > this.data[idx], 大顶堆用小于号this.data[pIdx] < this.data[idx]
        idx && this.data[pIdx] > this.data[idx])
      ) {
        this.data[pIdx] = [this.data[idx], (this.data[idx] = this.data[pIdx])][0]
        idx = pIdx
      }
    } else {
      while (
        ((pIdx = Math.floor((idx - 1) / 2)),
        // 小顶堆是用大于号 this.data[pIdx] > this.data[idx], 大顶堆用小于号this.data[pIdx] < this.data[idx]
        idx && this.data[pIdx] < this.data[idx])
      ) {
        this.data[pIdx] = [this.data[idx], (this.data[idx] = this.data[pIdx])][0]
        idx = pIdx
      }
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
var nthUglyNumber = function(n) {
    let h = new Heap(0)
    let ans = 1
    h.push(1)
    while(n--) {
        ans = h.top()
        h.pop()
        if (ans % 5 === 0) {
            h.push(ans * 5) 
        } else if (ans % 3 === 0) {
            h.push(ans * 3)
            h.push(ans * 5)
        } else {
            h.push(ans * 3)
            h.push(ans * 5)
            h.push(ans * 2)
        }
    }
    return ans
};