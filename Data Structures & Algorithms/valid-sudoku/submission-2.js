class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const boardSize = 9
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const squares = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < boardSize; r++) {
            for (let c = 0; c < boardSize; c++) {
                const current = board[r][c]

                if (current === ".") continue
                
                const squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (rows[r].has(current) || cols[c].has(current) ||                    squares[squareIndex].has(current)) {
                    return false
                }

                rows[r].add(current)
                cols[c].add(current)
                squares[squareIndex].add(current)
            }
        }

        return true
    }
}
