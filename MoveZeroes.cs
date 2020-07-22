// c# solution for move zeroes

public class Solution {
    public void MoveZeroes(int[] nums) {
        var pointer1 = 0;
        
        for (int i = 0; i < nums.Length; i++)
            if (nums[i] != 0)
                nums[pointer1++] = nums[i];
        
        for (int j = pointer1; j < nums.Length; j++)
            nums[j] = 0;
    }
}