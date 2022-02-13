/**
 * @param {number} k
 * @param {number[]} nums
 */
 class Heap {
  constructor() {
    this.data = []
  }
  // 向下调
  shiftDown(ind = 0) {
    let n = this.size() - 1
    while (ind * 2 + 1 <= n) {
      let tmp = ind
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
var KthLargest = function(k, nums) {
    this.k = k
    this.h = new Heap()
    for (let val of nums) {
        this.add(val)
    }
    console.log(this.h.data, 'datass')
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.h.push(val)
    if (this.h.size() > this.k) {
        this.h.pop()
    }
    return this.h.top()
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */