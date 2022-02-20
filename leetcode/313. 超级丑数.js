/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
 var nthSuperUglyNumber = function(n, primes) {
  let p = new Array(primes.length).fill(0)
  [1, 0, 0, 0]
  primes = [2,7,13,19]
  let data = [1, 2]
  let ans = 1
  while (data.length < n) {
      ans = primes[0] * data[p[0]]
      for (let i = 0; i < primes.length; i++) {
          ans = Math.min(ans, primes[i] * data[p[i]])
      }
      for (let i = 0; i < primes.length; i++) {
          if (primes[i] * data[p[i]] === ans) p[i]++
      }
      data.push(ans)
  }
  return ans
};