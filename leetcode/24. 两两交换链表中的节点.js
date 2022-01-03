
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var swapPairs = function(head) {
if (!head) return null
let nodeFlag = new ListNode(-1, head)
let temp = nodeFlag
// -1 => 2 => 1 => 3 => 4 => 5 => null
while(temp.next && temp.next.next) {
  let pre = temp.next // 1 -----   3
  let cur = temp.next.next // 2 ----- 4
  pre.next = cur.next // 1 => 3 ----- 3 => 5
  cur.next = pre // 2 => 1 ----- 4 => 3
  temp.next = cur // -1 => 2 ----- 1 => 4
  temp = pre // 1 ----- 3
}
return nodeFlag.next
};