/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
  if (!head) return null
  let dummy = new ListNode(-1, head)
  let cur = dummy
  let pre = dummy
  while (cur.val !== val) {
      pre = cur
      cur = cur.next
  }
  let next = pre.next
  pre.next = next ? next.next : null
  return dummy.next
};