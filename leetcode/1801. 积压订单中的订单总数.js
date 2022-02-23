/**
 * @param {number[][]} orders
 * @return {number}
 */
 class Heap {
  constructor(heapType, com) {
    // 0是小顶堆，1是大顶堆
    this.heapType = heapType || 0
    this.data = []
    this.com = com || this.defCom
  }
  defCom(val1, val2) {
      if (this.heapType === 0) {
          return val1 > val2
      } else {
          return val1 < val2
      }
  }
  // getTep(ind) {}
  // 向下调
  shiftDown(ind = 0) {
    let n = this.size() - 1
    while (ind * 2 + 1 <= n) {
      let tmp = ind
      // 小顶堆是用大于号 this.data[tmp] > this.data[ind * 2 + 1]， 大顶堆小于号 this.data[tmp] < this.data[ind * 2 + 1]
      if (this.com(this.data[tmp], this.data[ind * 2 + 1])) tmp = ind * 2 + 1
        if (ind * 2 + 2 <= n && this.com(this.data[tmp], this.data[ind * 2 + 2]))
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
        idx && this.com(this.data[pIdx], this.data[idx]))
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
var getNumberOfBacklogOrders = function(orders) {
    let sell = new Heap(0, (val1, val2) => {
        return val1[0] > val2[0]
    })
    let buy = new Heap(1, (val1, val2) => {
        return val1[0] < val2[0]
    })
    for (let x of orders) {
        // let [price, amount, orderType] = x
        if (x[2] === 0) {
            while(x[1] !== 0 && sell.size() && sell.top()[0] <= x[0]) {
                let cnt = Math.min(x[1], sell.top()[1])
                x[1] -= cnt
                sell.top()[1] -= cnt
                if (sell.top()[1] === 0) { sell.pop() }
            }
            if (x[1] !== 0) { buy.push(x); }
        } else {
            while (x[1] !== 0 && buy.size() && buy.top()[0] >= x[0]) {
               let cnt = Math.min(x[1], buy.top()[1])
               x[1] -= cnt
               buy.top()[1] -= cnt
               if (buy.top()[1] === 0) { buy.pop() }
            }
            if (x[1] !== 0) { sell.push(x); }
        }
    }
    let sum = 0; let mod = 1000000007;
    for (let x of buy.data) {
        sum = (sum + x[1] ) % mod;
    }
    for (let x of sell.data) {
        sum = (sum + x[1]) % mod;
    }
    return sum
};