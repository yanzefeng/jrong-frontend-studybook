class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

class MyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (!(0 <= index && index < this.size)) return -1
    let p = this.head
    let i = 0
    while (i !== index) {
        p = p.next
        i++
    }
    return p.val
    }
  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    this.addAtIndex(0, val)
  }
  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    this.addAtIndex(this.size, val)
  }
  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    let node = this.head
    if (index <= 0) {
      // 插入头部时
      this.head = new Node(val)
      this.head.next = node
    } else if (index > this.size) {
        return 
    } else {
      let i = 0
    //  要找到当前下标的上上一个才可以插入
      while(i < index - 1) {
          node = node.next
          i++
      }
      let temp = node.next
      node.next = new Node(val)
      node.next.next = temp
    }
    this.size++
    return
  }
  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      return
    } //排除不符合规范的索引
    let current = this.head
    if (index == 0) {
      //删除第一个时
      this.head = this.head.next
    } else {
      let i = 0
      let previous = null
      while (i < index) {
        previous = current
        current = current.next
        i++
      }
      previous.next = current.next
    }
    this.size--
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */