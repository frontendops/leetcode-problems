// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

public class Solution {
    public int[] ReplaceElements(int[] arr) {
        
        var lastHighest = 0;
        int currNum;
        
        for (int i = arr.Length - 1; i >= 0; i--)
            if (i != arr.Length - 1)
            {
                currNum = lastHighest;
                lastHighest = arr[i] > lastHighest ? arr[i] : lastHighest; 
                arr[i] = currNum;
                
            } else
            {
                lastHighest = arr[i];
                arr[i] = -1;
            }

        return arr;
    }
}
