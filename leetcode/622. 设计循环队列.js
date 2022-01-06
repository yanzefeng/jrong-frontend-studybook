/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
  this.queue = new Array(k)
  this.cnt = 0
  this.head = 0
  this.tail = 0
  this.size = k

};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false
  this.queue[this.tail] = value
  this.cnt += 1
  this.tail += 1
  if (this.tail === this.size ) this.tail = 0
  return true
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false
  this.head += 1
  this.cnt -= 1
  if (this.head === this.size) this.head = 0
      return true
  // this.queue[this.head] 
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1
  return this.queue[this.head]
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1
  return this.queue[this.tail === 0 ? this.size - 1 : this.tail - 1]
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.cnt === 0
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return this.cnt === this.size
};

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/