var Twitter = function() {
  this.date = 0
  this.tweetIdsMap = {}
  this.followMap = {}
};

/** 
* @param {number} userId 
* @param {number} tweetId
* @return {void}
*/
Twitter.prototype.postTweet = function(userId, tweetId) {
  !this.tweetIdsMap[userId] && (this.tweetIdsMap[userId] = [])
  this.tweetIdsMap[userId].push({
      date: this.date++,
      tweetId
  })
};

/** 
* @param {number} userId
* @return {number[]}
*/
Twitter.prototype.getNewsFeed = function(userId) {
  let followArr = []
  let followUser = this.followMap[userId] || []
  for (let i = 0; i < followUser.length; i++) {
     followArr = [...followArr, ...(this.tweetIdsMap[followUser[i]] || [])]
  }
  let dataArr = [...(this.tweetIdsMap[userId] || []), ...followArr].sort((a, b) => b.date - a.date)
  let arr = []
  let i = 0
  while(i !== 10 && dataArr[i]) {
      arr.push(dataArr[i].tweetId)
      i++
  }
 return arr
};

/** 
* @param {number} followerId 
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.follow = function(followerId, followeeId) {
  !this.followMap[followerId] && (this.followMap[followerId] = [])
  if(this.followMap[followerId].find(item => item === followeeId)) return
  this.followMap[followerId].push(followeeId)
};

/** 
* @param {number} followerId 
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.unfollow = function(followerId, followeeId) {
  // [].findIndex
  !this.followMap[followerId] && (this.followMap[followerId] = [])
  // console.log(this.followMap[followerId], '=====')
  this.followMap[followerId].splice(this.followMap[followerId].findIndex(item => followeeId === item), 1)
};

/**
* Your Twitter object will be instantiated and called as such:
* var obj = new Twitter()
* obj.postTweet(userId,tweetId)
* var param_2 = obj.getNewsFeed(userId)
* obj.follow(followerId,followeeId)
* obj.unfollow(followerId,followeeId)
*/