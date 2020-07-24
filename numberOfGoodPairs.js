// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

var numIdenticalPairs = function(nums) {
    var map = {}
    
     
     nums.forEach((num, i) => {
         if (!map.hasOwnProperty(num)) {
             map[num] = 1
         } else {
           map[num] = map[num] + 1
         }
     })
    const pairCount = Object.values(map).reduce((acc, num) => {
      const currentNum = num > 1 ? (num * (num - 1))/2 : 0
      return currentNum + acc
    },0)
   
     return pairCount
 };