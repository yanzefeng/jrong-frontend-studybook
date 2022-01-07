function getNext(n) {
  return String(n).split('').map(i => i ** 2).reduce((a, b) => a + b)
}

function isHappy(n) {
  let slow = n
  let fast = getNext(n)
  while (slow !== 1 && slow !== fast) {
    slow = getNext(slow) // 注意不要写成n了
    fast = getNext(getNext(fast)) // 注意不要写成n了
  }
  return slow === 1
}


function isHappy2(n) {
  let res = getNext(n)
  let set = new Set()
  set.add(res)
  while (res !== 1) {
    res = getNext(res)
    if (set.has(res)) return false
    set.add(res)
  }
  return res === 1
};
