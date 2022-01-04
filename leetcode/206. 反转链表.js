// 206. 反转链表
var reverseList = function(head) {

  let cur = head
  
  let pre = null
  // 1 => 2 => 3 => 4
  while(cur) {
      // 暂存下个节点，这样指针才可以滑动
      let nxt = cur.next // 2
      // 当前节点的next指向上一个节点，断开了与下个节点的连接
      cur.next = pre // 1 => null
      // 此次循环结束前 保存当前节点为上一个节点
      pre = cur // 1
      // 滑到下一个节点
      cur = nxt
  }
  return pre
};