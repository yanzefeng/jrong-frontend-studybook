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
    let res = this.top()
    if (this.size() === 0) return
    if (this.size() === 1) {
      return this.data.pop()
    }
    this.data[0] = this.data.pop()
    this.shiftDown(0)
    return res
  }
  top() {
    return this.data[0]
  }
  size() {
    return this.data.length
  }
} 
var MedianFinder = function() {
    this.maxH = new Heap(1)
    this.minH = new Heap(0)
    this.size = 0
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.size++
    if (num < this.maxH.top() || !this.size) {
        this.maxH.push(num)
    } else {
        this.minH.push(num)
    }
    // if (this.minH.size() > this.maxH.size()) {
    //     this.maxH.push(this.minH.pop())
    // }
    // if (this.maxH.size() === this.minH.size() + 2) {
    //     this.minH.push(this.maxH.pop())
    // }
    while((this.maxH.size() - this.minH.size() !== 1) && this.maxH.size() !== this.minH.size()) {
        if (this.minH.size() > this.maxH.size()) {
            this.maxH.push(this.minH.pop())
        } else {
            this.minH.push(this.maxH.pop())
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
let res = this.maxH.top()
    if (this.size % 2 === 0) {
        res = (res + this.minH.top()) / 2
    }
    return res
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */