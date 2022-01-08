var Node = function(val, pre = null, next = null) {
  this.val = val
  this.pre = pre
  this.next = next
  this.insertPre = function(val) {
    const pre = this.pre
    this.pre = val
    val.next = this
    if (pre) pre.next = val
    // pre.next = pre
    val.pre = pre
  }
  this.inserNext = function(val) {
    const next = this.next
    this.next = val
    val.pre = this
    if (next) next.pre = val
    val.next = next
  }
  this.delPre = function() {
    // 删除当前节点的前一个节点
    if (!this.pre) return -1
    // p是当前要删除的节点
    const p = this.pre
    this.pre = p.pre
    // 有可能是空所以需要判断一下

    if (this.pre) this.pre.next = this
    return p
  }
  this.delNext = function() {
    if (!this.next) return -1
    const p = this.next
    this.next = p.next
    if (this.next) this.next.pre = this
    return p
  }
}
// 循环双端队列
var MyCircularDeque = function() {
    this.head = new Node('head')
    this.tail = new Node('tail')
    this.head.next = this.tail
    this.tail.pre = this.head
    this.cnt = 0 
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    this.head.inserNext(new Node(value))
    this.cnt++
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    this.tail.insertPre(new Node(value))
    this.cnt++
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) return false
    let val = this.getFront()
    this.head.delNext()
    this.cnt--
    return val
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) return false
    let val = this.getRear()
    this.tail.delPre()
    this.cnt--
    return val
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()) return -1
    return this.head.next.val
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()) return -1
    return this.tail.pre.val
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.head.next === this.tail
};


MyCircularDeque.prototype.size = function() {
  return this.cnt
}

// 前中后队列
class FrontMiddleBackQueue {
  constructor() {
    this.q = new MyCircularDeque()
    this.q2 = new MyCircularDeque()
  }

  pushFront(value) {
    this.q.insertFront(value)
    this.update()
  }

  pushMiddle(value) {
    // 因为中间始终在队列1中，所以先判断q的size是否比q2大如果是，就先把q的尾部元素放到q2头部去
    if (this.q.size() > this.q2.size()) {
      this.q2.insertFront(this.q.deleteLast())
    }
    this.q.insertLast(value)
    // this.q2.insertLast(value)
    // this.pushBack(value)
    // this.pushFront(value)
  }

  pushBack(value) {
    this.q2.insertLast(value)
    this.update()
  }

  popFront() {
    if (this.isEmpty()) return -1
    let res = this.q.deleteFront()
    this.update()
    return res
  }

  popMiddle() {
    if (this.isEmpty()) return -1
    let res = this.q.deleteLast()
    this.update()
    return res
  }
  popBack() {
    if (this.isEmpty()) return -1
    let res = this.q2.isEmpty() ? this.q.deleteLast() : this.q2.deleteLast()
    
    this.update()
    return res
  }
  update() {
    if (this.q.size() < this.q2.size()) {
      this.q.insertLast(this.q2.deleteFront())
    }
    if (this.q.size() === (this.q2.size() + 2)) {
      let val = this.q.deleteLast()
      this.q2.insertFront(val)
    }
  }
  isEmpty() {
    return this.q.size() === 0
  }
}