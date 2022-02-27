/**
 * @param {character[][]} grid
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
    return fa[x] = (fa[x] === x ? x : this.get(fa[x]))
  }
  merge(a, b) {
    this.fa[this.get(a)] = this.get(b)
  }
}
var numIslands = function(grid) {
    let n = grid.length
    let m = grid[0].length
    function findInd(i, j) {
        return i * m + j
    }
    let unionSet = new UnionSet(n * m)

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '0') continue
            if (i > 0 && grid[i - 1][j] === '1') {
                unionSet.merge(findInd(i, j), findInd(i - 1, j))
            }
            if (j > 0 && grid[i][j - 1] === '1') {
                unionSet.merge(findInd(i, j), findInd(i, j - 1))
            }
        }
    }
    let ans = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1' && unionSet.get(findInd(i, j)) === findInd(i, j)) ans += 1
        }
    }
    return ans
};