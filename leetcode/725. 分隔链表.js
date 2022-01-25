/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let len = 0
  let node = head
  while (node) {
    len++
    node = node.next
  }
  let maxLen = Math.floor(len / k)
  let curry = len % k
  let m = 0
  let ret = []
  let dummyHead = new ListNode(-1, head)
  // dummyHead.next = head
  for (let i = 0; i < k; i++) {
    node = dummyHead
    let j = 0
    while (j++ < maxLen) {
      node = node ? node.next : null
    }
    if (m++ < curry) {
      node = node ? node.next : null
    }
    ret.push(dummyHead.next)
    let next = node.next
    node.next = null
    dummyHead.next = next
  }

  return ret
}
