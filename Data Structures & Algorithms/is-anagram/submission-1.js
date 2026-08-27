class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const counter = new Map()

        for (const c of s) {
            if (counter.has(c)) {
                counter.set(c, counter.get(c) + 1)
            } else {
                counter.set(c, 1)
            }
        }
        
        for (const c of t) {
            const count = counter.get(c)
            if (!count) return false
            counter.set(c, count - 1)
        }
        
        return true
    }
}
