
// 通过正常的遍历，给每个节点通过map做标记，如果节点map含有了这个节点了说明是个环形，否则遍历结束，没有找到相同的节点，不是环形
function hasCycle(head) {
  let map = new Map()
  while(head) {
      if (map.has(head)) return true
      map.set(head, head)
      head = head.next
  }
  return false
}

// 遍历每个节点，用map把指针存好，判断是否已经存在了相同的指针，如果有就是环形节点
function hasCycle2(head) {
   
   let slow = head
   let fast = head
   while (fast && fast.next) {
       if (fast === slow) return true
       fast = fast.next.next
       slow = slow.next
   }
   return false
};

