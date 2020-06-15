/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
    let hash = new Map()
    for (i = 0; i < nums.length; i++) {
      hash.set(nums[i], i)
    }
  
     for (i = 0; i < nums.length; i++) {
       let complement = target - nums[i]
  
        if (hash.has(complement) && i !== hash.get(complement)) {
           return [i, hash.get(complement)]
        }
    }
};

console.log(twoSum([2,7,11,15], 9))