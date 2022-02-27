/**
 * @param {string[]} equations
 * @return {boolean}
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
var equationsPossible = function(equations) {
  let n = equations.length
  let unionset = new UnionSet(26)
  let baseNum = 'a'.charCodeAt()
  for (let i = 0; i < n; i++) {
      let item = equations[i]
      if (item[1] === '=') {
          unionset.merge(item[0].charCodeAt() - baseNum, item[3].charCodeAt() - baseNum)
      }
      // if ()
  }
  for (let i = 0; i < n; i++) {
      let item = equations[i]
      if (item[1] === '=') {
          if (unionset.get(item[0].charCodeAt()- baseNum) !== unionset.get(item[3].charCodeAt()-baseNum)) return false
      } else {
          if (unionset.get(item[0].charCodeAt() - baseNum) === unionset.get(item[3].charCodeAt() - baseNum)) return false

      }
  }
  return true
};