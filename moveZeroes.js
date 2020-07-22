// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
    let zeroCount = 0;
       for (let i = 0; i < nums.length; i++) {
           if (nums[i] === 0) {
               nums.splice(i,1)
               zeroCount++
               i--
           }
       }
   
       for (let i = 0; i < zeroCount; i++) {
         nums.push(0)
       }
   };