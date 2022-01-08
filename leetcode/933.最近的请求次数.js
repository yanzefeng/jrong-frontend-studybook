var RecentCounter = function() {
  this.count = 0
  this.arr = []
};

/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function(t) {
  this.arr.push(t)
  while(this.arr[0] < t - 3000) {
      this.arr.shift()
  }
  // this.arr = this.arr.filter(item => {
  //     return item >= t - 3000
  // })
  return this.arr.length
};

/**
* Your RecentCounter object will be instantiated and called as such:
* var obj = new RecentCounter()
* var param_1 = obj.ping(t)
*/