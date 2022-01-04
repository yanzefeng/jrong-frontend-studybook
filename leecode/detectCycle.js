// 环形链表II

var detectCycle = function(head) {
  // 快慢指针解法
 //  1.先定义两个指针，fast， slow
 if (!head) return null
 let fast = head
 let slow = head
 while(fast && fast.next) {
     fast = fast.next.next
     slow = slow.next
     if (fast === slow) {
         fast = head
         while(fast !== slow) {
             fast = fast.next
             slow = slow.next
         }
         return fast
     }
 }
 return null
}


var detectCycle = function (head) {
  if (!head) return null
  let set = new Set()
  while(head) {
    if (set.has(head)) return head
    set.add(head)
    head = head.next
  }
  return null
}

