class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = {}
        const cols = {}
        const squares = {}
        const boardSize = 9

        // initialize sets
         for (let i = 0; i < boardSize; i++) {
            rows[i] = new Set()
            cols[i] = new Set()
         }

        for (let r = 0; r < boardSize; r++) {
            for (let c = 0; c < boardSize; c++) {
                const current = board[r][c]

                if (current === ".") continue
                
                const key = this.getSqKey(Math.floor(r/3), Math.floor(c/3))

                if (!squares[key]) {
                    squares[key] = new Set()
                }

                if (rows[r].has(current) || cols[c].has(current) ||                    squares[key].has(current)) {
                    return false
                }

                rows[r].add(current)
                cols[c].add(current)
                squares[key].add(current)
            }
        }

        return true
    }

    getSqKey(r, c) {
        return `${r},${c}`
    }
}
