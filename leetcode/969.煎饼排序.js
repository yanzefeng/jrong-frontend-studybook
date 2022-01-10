/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    let ret = [], maxIndex;
    while(arr.length > 1) {
        
        maxIndex = getMaxIndex(arr)
        if (maxIndex !== (arr.length - 1)) {
            if (maxIndex > 0) {
                ret.push(maxIndex + 1)
                reverse(arr, maxIndex)
            }
            
            reverse(arr, arr.length - 1)
            ret.push(arr.length)
        }
        
        
        arr.pop()
    }
    return ret
    
};

function getMaxIndex(arr) {
     let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[max]){
            max = i;
        }
    }
    return max;
}
function reverse(arr, j) {
    if (j < 1) return
    for (let i = 0; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}
