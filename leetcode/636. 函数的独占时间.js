/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
 var exclusiveTime = function(n, logs) {
  let arr = new Array(n).fill(0)
  let stack = []
  for (let i = 0, pre = 0; i < logs.length; i++) {
      let [id, status, time] = logs[i].split(':')
      time = parseFloat(time)
      if (status === 'start') {
          if (stack.length) {
              arr[stack[stack.length - 1]] += time - pre
          }
          pre = time
          stack.push(id)
      } else {
           arr[id] += time - pre + 1
           pre = time + 1
           stack.pop()
      }
  }
  return arr
};