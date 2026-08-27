class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1) return [strs]

       const groups = new Map()

       for (const str of strs) {
        const key = [...str].sort().join("")

        if (!groups.has(key)) {
            groups.set(key, [])
        }

        groups.get(key).push(str)
       }

       const result = []
       for (const arr of groups.values()) {
            result.push(arr)
       }
       return result
    }
}

// {
//     "act": ["act", "cat"],
//     "opst": ["pots", "tops", "stop"],
//     "aht": ["hat"]
// }
