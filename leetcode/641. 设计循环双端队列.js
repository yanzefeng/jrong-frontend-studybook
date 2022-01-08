/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
  this.n = k 
  this.queue = new Array(this.n)
  this.front = 0
  this.rear = 0
  this.cnt = 0
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function(value) {
 if(this.isFull()) return false
 this.front = (this.front - 1 + this.n) % this.n

 this.queue[this.front] = value
 this.cnt++
 return true
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function(value) {
 if(this.isFull()) return false
 this.queue[this.rear] = value

 this.rear = (this.rear + 1) % this.n
  this.cnt++
 return true
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function() {
  if(this.isEmpty()) return false
  this.front = (this.front + 1) % this.n
  this.cnt--
  return true
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function() {
  if(this.isEmpty()) return false
  this.rear = (this.rear - 1 + this.n) % this.n
  this.cnt--
  return true
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getFront = function() {
  if (this.isEmpty()) return -1
  return this.queue[this.front]
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getRear = function() {
 if (this.isEmpty()) return -1
  return this.queue[(this.rear - 1 + this.n) % this.n]
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function() {
  return this.cnt === 0
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function() {
  return this.cnt === this.n
};

/**
* Your MyCircularDeque object will be instantiated and called as such:
* var obj = new MyCircularDeque(k)
* var param_1 = obj.insertFront(value)
* var param_2 = obj.insertLast(value)
* var param_3 = obj.deleteFront()
* var param_4 = obj.deleteLast()
* var param_5 = obj.getFront()
* var param_6 = obj.getRear()
* var param_7 = obj.isEmpty()
* var param_8 = obj.isFull()
*/




// 链表方法实现



/**
 * @param {number} k
 */

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
    // let pre = this.pre.pre
    // pre.next = this
    // this.pre = pre
  }
  this.delNext = function() {
    if (!this.next) return -1
    const p = this.next
    this.next = p.next
    if (this.next) this.next.pre = this
    return p
  }
}
var MyCircularDeque = function(k) {
    this.head = new Node('head')
    this.tail = new Node('tail')
    this.head.next = this.tail
    this.tail.pre = this.head
    this.front = null
    this.last = null
    this.max = k
    this.cnt = 0 
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) return false
    this.last = new Node(value)
    this.head.inserNext(this.last)
    this.cnt++
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) return false
    this.front = new Node(value)
    this.tail.insertPre(this.front)
    this.cnt++
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) return false
    this.head.delNext()
    this.cnt--
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) return false
    this.tail.delPre()
    this.cnt--
    return true
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

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.cnt === this.max
};