class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numbers = new Set(nums)

        let longestSeq = 0

        for (const num of nums) {
            if (numbers.has(num - 1)) continue
            let length = 1
            let target = num + 1

            while(numbers.has(target)) {
                length++
                target++
            }

            longestSeq = Math.max(longestSeq, length)
        }
        
        return longestSeq
    }
}
