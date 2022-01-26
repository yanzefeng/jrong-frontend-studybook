/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kthGrammar = function(n, k) {
  if (n === 1) return 0
  let len =  2 ** (n - 1)
  if (k > len / 2) {
      // 得到上一行的值，然后取反
      let val = kthGrammar(n - 1, k - len / 2)
      return val === 0 ? 1 : 0
  } else {
      return kthGrammar(n - 1, k)
  }
};