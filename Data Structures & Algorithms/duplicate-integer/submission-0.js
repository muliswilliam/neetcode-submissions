class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();

        for (const num of nums) {
            if (map.has(num.toString())) {
                return true
            }

            map.set(num.toString(), num)
        }

        return false
    }
}
