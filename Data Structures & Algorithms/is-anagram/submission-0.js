class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s === t) return true

        const counter = new Map()

        for (const c of s) {
            if (counter.has(c)) {
                counter.set(c, counter.get(c) + 1)
            } else {
                counter.set(c, 1)
            }
        }
        
        for (const c of t) {
            if (!counter.has(c)) return false
            counter.set(c, counter.get(c) - 1)
        }

        const values = counter.values()
        for (const v of values) {
            if (v !== 0) return false
        }
        return true
    }
}
