var swapPairs = function(head) {
  if (!head) return null
  let nodeFlag = new ListNode(-1, head)
  let temp = nodeFlag
  // let pre = null
  while(temp.next && temp.next.next) {
      let pre = temp.next // 1
      let cur = temp.next.next // 2
      pre.next = cur.next
      cur.next = pre
      temp.next = cur
      temp = pre
  }
  return nodeFlag.next
};