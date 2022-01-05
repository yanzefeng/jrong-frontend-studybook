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
 * @return {ListNode}
 */

function reverseList(head) {
    if(!head) return null
    let cur = head
    let pre = null
    while(cur) {
        let nex = cur.next
        cur.next = pre
        pre = cur
        cur = nex
    }
    return pre
}



var reverseKGroup = function(head, k) {
    if (k === 1) return head
    // 虚拟节点
    let dummy = new ListNode(-1, head)
    // 
    let pre = dummy
    let end = dummy
    while(end.next) {
        for (let i = 0; i < k && end; i++) {
            end = end.next
        }
        if (end === null) break
        // 找到需要反转的头部
        let start = pre.next
        // 暂存下一个节点
        let next = end.next
        // 断开连接
        end.next = null
        // reverseList会返回新的头部
        pre.next = reverseList(start)
        // 之前的头变成了尾部，所以重新建立 下一个节点的连接
        start.next = next
        // 记录上一次反转的尾部
        pre = start // 2
        // 下一次反转开始的位置
        end = pre
    }
     return dummy.next
};