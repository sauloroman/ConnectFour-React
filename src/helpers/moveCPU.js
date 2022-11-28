export const moveCPU = (board) => {

  for (let i = 0; i < board.length; i++) {

    if ( board[i][0] !== 'Player1' && board[i][0] !== 'Player2' ) {

      for (let j = board[i].length - 1; j >= 3; j--) {
        const firstPositionCol = board[i][j];

        if (firstPositionCol === "Player1" || firstPositionCol === "Player2") {
          if (
            board[i][j] === "Player1" &&
            board[i][j - 1] === "Player1" &&
            board[i][j - 2] === "Player1" &&
            board[i][j - 3] !== "Player2"
          ) {
            return i;
          }
        } else {
          break;
        }
      }

    }
  }

  for (let j = board.length - 1; j >= 0; j--) {
    if ( board[j][0] !== 'Player1' && board[j][0] !== 'Player2' ) {
      for (let i = 0; i <= 3; i++) {
        if (
          board[i][j] === "Player1" &&
          board[i + 1][j] === "Player1" &&
          board[i + 2][j] === "Player1"
        ) {
          return i + 3;
        }
      }
    }
  }

  let random;

  do {
    random = Math.round( Math.random() * 6 );
  } while( board[random][0] === 'Player1' || board[random][0] === 'Player1' );
  
  return random;
};
