class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if (numbers.length === 0) return []
        // Build a hash table with
        // key: number
        // value: 1-indexed index of the number in the array
        // O(n) time and O(1) space ??
        const hashtable = new Map()

        for (const [i, num] of numbers.entries()) {
            hashtable.set(num, i + 1)
        }

        console.log(hashtable)

        let result = []
        for (const [i, num] of numbers.entries()) {
            const difference = target - num

            if (hashtable.has(difference)) {
                const index1 = i + 1
                const index2 = hashtable.get(difference)
                if (index1 < index2) {
                    result = [index1, index2]
                    break;
                }
            }
        }
        return result
    }
}
