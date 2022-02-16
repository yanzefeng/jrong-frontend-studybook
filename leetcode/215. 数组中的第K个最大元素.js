/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
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
var findKthLargest = function(nums, k) {
    // nums = nums.sort((a, b) => b - a)
    // return nums[k - 1]
    let h = new Heap()
    for (let val of nums) {
        h.push(val)
        if (h.size() > k) {
            h.pop()
        }
    }
    return h.top()
};