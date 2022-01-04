var rotateRight = function(head, k) {
  if (!head) return null
  let cur = head
  let size = 1
  while(cur.next) {
      cur = cur.next
      size += 1
  }
  cur.next = head
    // 
  for (let i = 0; i < size - k % size - 1; i++) {
      head = head.next
  }
  cur = head.next
  head.next = null
  return cur
};