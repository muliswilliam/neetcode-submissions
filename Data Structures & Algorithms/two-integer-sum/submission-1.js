class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            const matchIndex = seen.get(complement);

            if (matchIndex !== undefined) {
                return [matchIndex, i];
            }

            seen.set(nums[i], i);
        }

        return [];
    }
}