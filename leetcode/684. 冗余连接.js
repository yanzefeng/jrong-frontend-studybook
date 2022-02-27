/**
 * @param {number[][]} edges
 * @return {number[]}
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
var findRedundantConnection = function(edges) {
  let n = edges.length
  let u = new UnionSet(n)
  for (let i = 0; i < n; i++) {
      let item = edges[i]
      if (u.get(item[0]) === u.get(item[1])) return [item[0], item[1]]
      u.merge(item[0], item[1])
  }
};