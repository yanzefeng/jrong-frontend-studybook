/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
  if (!head) return null
  let smallHead = new ListNode(0)
  let largeHead = new ListNode(0)
  let small = smallHead
  let large = largeHead
  while(head) {
      if (head.val < x) {
         small = small.next = head
      } else {
          large = large.next = head
      }
      head = head.next
  }
  small.next = largeHead.next
  large.next = null
  return smallHead.next
};