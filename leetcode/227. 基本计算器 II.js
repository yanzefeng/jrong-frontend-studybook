var calculate = function(s) {
  // 要去调前后空串，否则，最后一个为空串的时候没法判断
  s = s.trim()
 let preOper = '+'
 let stack = []
 let num = 0 // 遇到计算符号的时候才把num入栈
 for (let i = 0; i < s.length; i++) {
      let si = s[i]
      if (si === ' ') continue
      if (!isNaN(Number(si))) {
         num = num * 10 + Number(si)
      }
      if (isNaN(Number(si)) || i === s.length - 1) {
         switch(preOper) {
              case '+':
                  stack.push(num)
                  break
              case '-':
                  stack.push(-num)
                  break
              case '*':
                  stack.push(stack.pop() * num)
                  break
              case '/':
                  stack.push(parseInt((stack.pop() / num)))
                  break
         }
         num = 0
         preOper = si
      }
  }
  let ant =  0
  if (stack.length) {
    ant = stack.reduce((t, i) => t += i)
  }
  return ant
};
