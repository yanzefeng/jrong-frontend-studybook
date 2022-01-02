// 92. 反转链表II

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
var reverseList = function (head) {
  let cur = head

  let pre = null
  while (cur) {
    // 暂存下个节点，这样指针才可以滑动
    let nxt = cur.next
    // 当前节点的next指向上一个节点，断开了与下个节点的连接
    cur.next = pre
    // 此次循环结束前 保存当前节点为上一个节点
    pre = cur
    // 滑到下一个节点
    cur = nxt
  }
  return pre
}

function reverseBetween(head, left, right) {
  const dummyNode = new ListNode(-1)
  dummyNode.next = head

  let pre = dummyNode
  // 先找到左边节点的前一个节点
  for(let i = 0; i < left - 1; i++) {
    pre = pre.next
  }

  let nodeRight = pre

  // 找到右边节点

  for (let i = 0; i < right - left + 1; i++) {
    nodeRight = nodeRight.next
  }
  // 保存需要反转部分的头部节点， 反转后就变成右边去了， 它的next需要重新接上尾部的节点
  let leftNode = pre.next
  // 保存尾部节点，反转后需要把尾部
  let endNode = nodeRight.next

  // 断开头部的节点的next
  pre.next = null
  // 断开右边节点的next
  nodeRight.next = null

  // 反转
  reverseList(leftNode)

  // 重新连接
  leftNode.next = endNode
  pre.next = nodeRight
  return dummyNode.next
}
