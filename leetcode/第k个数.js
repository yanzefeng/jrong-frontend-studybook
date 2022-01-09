/**
 * @param {number} k
 * @return {number}
 */
 var getKthMagicNumber = function(k) {
  let arr = [1]
  let p3 = 0, p5 = 0, p7 = 0
  while(arr.length < k) {
      let ans = 3 * arr[p3]
      ans = Math.min(ans, 5 * arr[p5])
      ans = Math.min(ans, 7 * arr[p7])
      if (arr[p3] * 3 === ans) p3++
      if (arr[p5] * 5 === ans) p5++
      if (arr[p7] * 7 === ans) p7++
      arr.push(ans)
  }
  return arr[arr.length - 1]
};

