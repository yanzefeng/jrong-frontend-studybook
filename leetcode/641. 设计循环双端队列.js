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