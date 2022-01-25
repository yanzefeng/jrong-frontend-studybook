/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return null
  let leftHead = new ListNode(0)
  let rightHead = new ListNode(0)
  let left = leftHead
  let right = rightHead
  let cur = head
  while (cur) {
    if (cur.val < x) {
      left = left.next = cur
    } else {
      right = right.next = cur
    }
    cur = cur.next
  }
  left.next = rightHead.next
  right.next = null
  return leftHead.next
}
