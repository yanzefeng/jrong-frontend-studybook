/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
  let arr = []
  for (let i = 0; i < ops.length; i++) {
      let val = ops[i]
      if (val === 'C') {
          arr.pop()
      } else if(val === 'D') {
          arr.push(+arr[arr.length - 1] * 2)
      } else if (val === '+') {
           arr.push(+arr[arr.length - 1] + +arr[arr.length - 2])
      } else {
        //   console.log(val)
          arr.push(val)
      }
  }
  return arr.reduce((a, b) => +a + +b)
};