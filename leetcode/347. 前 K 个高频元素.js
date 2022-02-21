/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 class Heap {
  constructor(mapVal) {
    this.data = []
    this.mapVal = mapVal
  }
  // 向下调
  shiftDown(ind = 0) {
    let n = this.size() - 1
    while (ind * 2 + 1 <= n) {
      let tmp = ind
      // 小顶堆是用大于号 this.data[tmp] > this.data[ind * 2 + 1]， 大顶堆小于号 this.data[tmp] < this.data[ind * 2 + 1]
    if (this.cmp(this.data[tmp], this.data[ind * 2 + 1])) tmp = ind * 2 + 1
    //   if (this.getVal(this.data[tmp]) > this.getVal(this.data[ind * 2 + 1])) tmp = ind * 2 + 1
    if (ind * 2 + 2 <= n && this.cmp(this.data[tmp], this.data[ind * 2 + 2])) tmp = ind * 2 + 2
      if (tmp === ind) break
      this.data[tmp] = [this.data[ind], (this.data[ind] = this.data[tmp])][0]
      ind = tmp
    }
  }
  getVal(key) {
      return this.mapVal[key]
  }
  cmp(key1, key2) {
      return this.getVal(key1) > this.getVal(key2)
    //   return key1 < key2
  }
  // 向上调整
  shiftUp(idx) {
    let pIdx = null
    while (
      ((pIdx = Math.floor((idx - 1) / 2)),
      // 小顶堆是用大于号 this.data[pIdx] > this.data[idx], 大顶堆用小于号this.data[pIdx] < this.data[idx]
      idx && this.cmp(this.data[pIdx], this.data[idx]))
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
var topKFrequent = function(nums, k) {
    let numsMap = {}
    for (let val of nums) {
        if (!numsMap[val]) {
            numsMap[val] = 1
        } else {
            numsMap[val] += 1
        }
    }
    let h = new Heap(numsMap)
    for (let key in numsMap) {
        h.push(key)
        if (h.size() > k) {
            h.pop()
        }
    }
    return h.data
};