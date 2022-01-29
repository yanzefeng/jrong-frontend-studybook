function isMatch(A, B) {
  if (!B) return true
  if (!A) return false
  if (A.val !== B.val) return false
  return isMatch(A.left, B.left) && isMatch(A.right, B.right)
}
var isSubStructure = function(A, B) {
  if (!A) return false
  if (!B) return false
  if (isMatch(A, B)) return true
  return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};
