/**
 * @param {number[][]} isConnected
 * @return {number}
 */

 class UnionSet {
  constructor(n) {
    this.fa = new Array(n + 1)
    for (let i = 0; i <= n; i++) {
      this.fa[i] = i
    }
  }
  get(x) {
    let fa = this.fa
    // 路径优化
    return fa[x] = (fa[x] === x ? x : (this.get(fa[x])))
  }
  merge(a, b) {
    this.fa[this.get(a)] = this.get(b)
  }
}
var findCircleNum = function(isConnected) {
    let n = isConnected.length
    let unionSet = new UnionSet(n)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < isConnected[i].length; j++) {
            if (isConnected[i][j] === 1) {
                unionSet.merge(i, j)
            }
        }
    }
    let ans = 0
    for (let i = 0; i < n; i++) {
        if (i === unionSet.get(i)) ans+=1
    }
    return ans
};