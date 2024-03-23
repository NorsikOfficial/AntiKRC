const setboard = (n) => {
    const board = [];

    for (let i = 0; i < n; i++) {
        board[i] = [];
        for (let j = 0; j < n; j++) {
            const value = Math.random();

            if (value > 0.5) {
                board[i][j] = 1;
            }
            else {
                board[i][j] = 0;
            }
        }
    }
    return board
}

const nextmove = (board) => {
    const n = board.length;

    const newboard = JSON.parse(JSON.stringify(board))

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let score = 0;

            if ((j < (n-1)) && (newboard[i][j+1] == 1)) {
                    score += 1;
                }
                if ((j > 0) && (newboard[i][j-1] == 1)) {
                    score += 1;
                }
                if ((i > 0) && (newboard[i-1][j] == 1)) {
                    score += 1;
                }
                if ((i < (n-1)) && (newboard[i+1][j] == 1)) {
                    score += 1;
                }
                if (((j < (n-1)) && (i < (n-1))) && (newboard[i+1][j+1] == 1)) {
                    score += 1;
                }
                if (((j > 0) && (i < (n-1))) && (newboard[i+1][j-1] == 1)) {
                    score += 1;
                }
                if (((j < (n-1)) && (i > 0)) && (newboard[i-1][j+1] == 1)) {
                    score += 1;
                }
                if (((j > 0) && (i > 0)) && (newboard[i-1][j-1] == 1)) {
                    score += 1;
                }


            if (board[i][j] == 1) {
                if (score == 3 || score == 2) {
                    board[i][j] = 1;
                }
                else {
                    board[i][j] = 0;
                }
            }
            else {
                if (score == 3) {
                    board[i][j] = 1;
                }
            }
        }
    }

    return board;
}

export {setboard, nextmove}