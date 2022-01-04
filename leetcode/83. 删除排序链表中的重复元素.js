var deleteDuplicates = function(head) {
  if (!head) return null
  let cur =head
  while(head) {
    if (head.val === head.next.val) {
      head.next = head.next.next
    }
    head = head.next
  }
}