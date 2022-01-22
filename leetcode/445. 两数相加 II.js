/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let s1 = []
  let s2 = []
  while (l1 || l2) {
    if (l1) {
      s1.push(l1)
      l1 = l1.next
    }
    if (l2) {
      s2.push(l2)
      l2 = l2.next
    }
  }
  let pre = 0
  let newHead = null
  while (s1.length || s2.length || pre > 0) {
    let s1Val = s1.length ? s1.pop().val : 0
    let s2Val = s2.length ? s2.pop().val : 0
    let newVal = s1Val + s2Val + pre
    pre = parseInt(newVal / 10)
    let node = new ListNode(newVal % 10)
    node.next = newHead
    newHead = node
  }
  return newHead
}
