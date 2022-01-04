var removeNthFromEnd = function (head, n) {
  if (!head) return null
  let dummyHead = new ListNode(-1, head)
  let pre = dummyHead
  let cur = head
  // while(cur && )
  // 1. 快指针， 最后的一个指针到要删除节点的前一个节点刚好相差了n，所以先让快指针先走n步
  // 2. 快指针走了n步之后，慢指针和快指针一起走，直到快指针到最后，刚好就是要找的
  for (let i = 0; i < n; i++) {
    cur = cur.next
  }

  if (!cur) return head.next

  while (cur) {
    cur = cur.next
    pre = pre.next
  }

  pre.next = pre.next.next

  return dummyHead.next
}
