/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
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
      if (this.getVal(this.data[tmp]) < this.getVal(this.data[ind * 2 + 1])) tmp = ind * 2 + 1
      if (ind * 2 + 2 <= n && this.getVal(this.data[tmp]) < this.getVal(this.data[ind * 2 + 2]))
        tmp = ind * 2 + 2
      if (tmp === ind) break
      this.data[tmp] = [this.data[ind], (this.data[ind] = this.data[tmp])][0]
      ind = tmp
    }
  }
  getVal(arr) {
    return arr[0] + arr[1]
  }
  // 向上调整
  shiftUp(idx) {
    let pIdx = null
    while (
      ((pIdx = Math.floor((idx - 1) / 2)),
      idx && this.getVal(this.data[pIdx]) < this.getVal(this.data[idx]))
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
var kSmallestPairs = function(nums1, nums2, k) {
    const h = new Heap()
    for (let val1 of nums1) {
        for (let val2 of nums2) {
            // 只有比堆顶小的元素才可以放进去
            if (h.size() < k || (val2 + val1 < h.top()[0] + h.top()[1])) {
                h.push([val1, val2])
                if (h.size() > k) {
                    h.pop()
                }
            } else {
                break
            }
            
        }
    }
    return h.data
};