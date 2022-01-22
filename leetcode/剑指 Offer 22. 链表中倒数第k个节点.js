/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
  let fast = head
  for (let i = 0; i < k; i++) {
      fast = fast.next
  }
  
  while(fast) {
      fast = fast.next
      head = head.next
  }
  return head
};