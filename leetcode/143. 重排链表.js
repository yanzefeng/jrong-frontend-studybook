/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function revse(head) {
  if (!head) return null
  let pre = null
  while (head) {
    let next = head.next
    head.next = pre
    pre = head
    head = next
  }
  // console.log(pre)
  return pre
}
var reorderList = function (head) {
  if (!head || !head.next) return head
  let dummy = new ListNode(0, head)
  let fast = dummy,
    slow = dummy
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  let temp = slow.next
  slow.next = null
  let right = revse(temp)
  while (head && right) {
    let headNext = head.next
    let rightNext = right.next
    head.next = right
    right.next = headNext
    head = headNext
    right = rightNext
  }
  return dummy.next
}
