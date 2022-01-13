/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
  let sArr = []
  let tArr = []
  let maxLen = Math.max(s.length, t.length)
  for (let i = 0; i < maxLen; i++) {
      let si = s[i]
      let ti = t[i]
      if(si === '#') {
          sArr.pop()
      } else if(si) {
          sArr.push(si)
      }

      if(ti === '#') {
          tArr.pop()
      } else if (ti) {
          tArr.push(ti)
      }
  }
  console.log(sArr, tArr)
  return sArr.join() === tArr.join()
};



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
  let sl = s.length - 1, tl = t.length -1, sk = 0, tk = 0
  while(sl >= 0 || tl >= 0) {
      while(sl >= 0) {
          if (s[sl] === '#') {
              sk++, sl--
          } else if (sk > 0) {
              sk--, sl--
          } else {
              break
          }
      }


       while(tl >= 0) {
          if (t[tl] === '#') {
              tk++, tl--
          } else if (tk > 0) {
               tk--, tl--
          } else {
              break
          }
      }

      if (sl >= 0 && tl >= 0) {
          if (s[sl] !== t[tl]) return false
      } else if (sl >= 0 || tl >= 0){
        return false
      }
      sl--, tl--
  }
  return true
};