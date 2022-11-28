import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    board: [
      ["00", "10", "20", "30", "40", "50", "60"],
      ["01", "11", "21", "31", "41", "51", "61"],
      ["02", "12", "22", "32", "42", "52", "62"],
      ["03", "13", "23", "33", "43", "53", "63"],
      ["04", "14", "24", "34", "44", "54", "64"],
      ["05", "15", "25", "35", "45", "55", "65"],
      ["06", "16", "26", "36", "46", "56", "66"],
    ],
    winner: null,
    winnerMove: [],
    tie: false 
  },
  reducers: {
    insertPiece: (state, action) => {
      const newBoard = state.board.map((column, index) => {
        if (index === action.payload.id) {
          let newColumn = [];

          for (let i = column.length - 1; i >= 0; i--) {
            if (column[i] !== "Player1" && column[i] !== "Player2") {
              newColumn = [...column];
              newColumn[i] = action.payload.activePlayer;
              break;
            } else {
              newColumn[i] = column[i];
            }
          }

          return newColumn;
        }

        return column;
      });

      return { ...state, board: newBoard };
    },

    determineWinner: (state, _action) => {
      // WINNER BY COLUMN
      for (let i = 0; i < state.board.length; i++) {
        for (let j = state.board[i].length - 1; j >= 3; j--) {
          const firstPositionCol = state.board[i][j];

          if (
            firstPositionCol === "Player1" ||
            firstPositionCol === "Player2"
          ) {
            if (
              state.board[i][j] === "Player1" &&
              state.board[i][j - 1] === "Player1" &&
              state.board[i][j - 2] === "Player1" &&
              state.board[i][j - 3] === "Player1"
            ) {
              return { 
                ...state, 
                winnerMove: [`${i}${j}`, `${i}${j-1}`, `${i}${j-2}`, `${i}${j-3}`],
                winner: "Player1"
              }
            }

            if (
              state.board[i][j] === "Player2" &&
              state.board[i][j - 1] === "Player2" &&
              state.board[i][j - 2] === "Player2" &&
              state.board[i][j - 3] === "Player2"
            ) {
              return { 
                ...state, 
                winnerMove: [`${i}${j}`, `${i}${j-1}`, `${i}${j-2}`, `${i}${j-3}`],
                winner: "Player2"
              };
            }
          } else {
            break;
          }
        }
      }

      // WINNER BY ROW
      for (let j = state.board.length - 1; j >= 0; j--) {
        for (let i = 0; i <= 3; i++) {
          if (
            state.board[i][j] === "Player1" &&
            state.board[i + 1][j] === "Player1" &&
            state.board[i + 2][j] === "Player1" &&
            state.board[i + 3][j] === "Player1"
          ) {
            return { 
              ...state, 
              winnerMove: [`${i}${j}`, `${i+1}${j}`, `${i+2}${j}`, `${i+3}${j}`],
              winner: "Player1"
            };
          }

          if (
            state.board[i][j] === "Player2" &&
            state.board[i + 1][j] === "Player2" &&
            state.board[i + 2][j] === "Player2" &&
            state.board[i + 3][j] === "Player2"
          ) {
            return { 
              ...state, 
              winnerMove: [`${i}${j}`, `${i+1}${j}`, `${i+2}${j}`, `${i+3}${j}`],
              winner: "Player2"
            };
          }
        }
      }

      for (let k = 7; k <= 13; k++) {
        
        let z = k - 6;
        
        if (k >= 10) z = 14 - k;

        // WINNER BY DIAGONAL LEFT-RIGHT
        for (let i = 0; i < z; i++) {

          let x = 4 - (z - i);

          if ( k < 11 ) {

            if ( 
              state.board[i][x] === 'Player1' &&
              state.board[i + 1][x + 1] === 'Player1' &&
              state.board[i + 2][x + 2] === 'Player1' &&
              state.board[i + 3][x + 3] === 'Player1' 
            ) {
              return { 
                ...state, 
                winnerMove: [`${i}${x}`, `${i+1}${x+1}`, `${i+2}${x+2}`, `${i+3}${x+3}`],
                winner: "Player1"
              };
            }

            if ( 
              state.board[i][x] === 'Player2' &&
              state.board[i + 1][x + 1] === 'Player2' &&
              state.board[i + 2][x + 2] === 'Player2' &&
              state.board[i + 3][x + 3] === 'Player2' 
            ) {
              return { 
                ...state, 
                winnerMove: [`${i}${x}`, `${i+1}${x+1}`, `${i+2}${x+2}`, `${i+3}${x+3}`],
                winner: "Player2"
              };
            }

          } else {

            if ( 
              state.board[x][i] === 'Player1' &&
              state.board[x + 1][i + 1] === 'Player1' &&
              state.board[x + 2][i + 2] === 'Player1' &&
              state.board[x + 3][i + 3] === 'Player1' 
            ) {
              return { 
                ...state, 
                winnerMove: [`${x}${i}`, `${x+1}${i+1}`, `${x+2}${i+2}`, `${x+3}${i+3}`],
                winner: "Player1"
              };
            }

            if ( 
              state.board[x][i] === 'Player2' &&
              state.board[x + 1][i + 1] === 'Player2' &&
              state.board[x + 2][i + 2] === 'Player2' &&
              state.board[x + 3][i + 3] === 'Player2' 
            ) {
              return { 
                ...state, 
                winnerMove: [`${x}${i}`, `${x+1}${i+1}`, `${x+2}${i+2}`, `${x+3}${i+3}`],
                winner: "Player2"
              };
            }
          }

        }

        // WINNER BY DIAGONAL RIGHT-LEFT
        for( let i = 0; i < z; i++ ) {

          let x;

          if ( k < 11 ) {
            x = (z - i) + 2;

            if ( 
              state.board[x][i] === 'Player1' &&
              state.board[x - 1][i + 1] === 'Player1' &&
              state.board[x - 2][i + 2] === 'Player1' &&
              state.board[x - 3][i + 3] === 'Player1' 
            ) {
              return { 
                ...state, 
                winnerMove: [`${x}${i}`, `${x-1}${i+1}`, `${x-2}${i+2}`, `${x-3}${i+3}`],
                winner: "Player1" 
              };
            }

            if ( 
              state.board[x][i] === 'Player2' &&
              state.board[x - 1][i + 1] === 'Player2' &&
              state.board[x - 2][i + 2] === 'Player2' &&
              state.board[x - 3][i + 3] === 'Player2' 
            ) {
              return { 
                ...state, 
                winnerMove: [`${x}${i}`, `${x-1}${i+1}`, `${x-2}${i+2}`, `${x-3}${i+3}`],
                winner: "Player2" 
              };
            }
 
          } else {
            x = 6 - i;
            let y = 4 - (z - i);

            if ( 
              state.board[x][y] === 'Player1' &&
              state.board[x - 1][y + 1] === 'Player1' &&
              state.board[x - 2][y + 2] === 'Player1' &&
              state.board[x - 3][y + 3] === 'Player1' 
            ) {
              return { 
                ...state, 
                winnerMove: [`${x}${y}`, `${x-1}${y+1}`, `${x-2}${y+2}`, `${x-3}${y+3}`],
                winner: "Player1" 
              };
            }

            if ( 
              state.board[x][y] === 'Player2' &&
              state.board[x - 1][y + 1] === 'Player2' &&
              state.board[x - 2][y + 2] === 'Player2' &&
              state.board[x - 3][y + 3] === 'Player2' 
            ) {
              return { 
                ...state, 
                winnerMove: [`${x}${y}`, `${x-1}${y+1}`, `${x-2}${y+2}`, `${x-3}${y+3}`],
                winner: "Player2" 
              };
            }
            
          }

        }

      }
    },

    determineTie: ( state, _action ) => {

      const newTie = state.board.every( row => (row[0] === 'Player1' || row[0] === 'Player2') );

      return {
        ...state,
        tie: newTie
      }

    },

    resetBoard: (_state, _action) => {
      return {
        board: [
          ["00", "10", "20", "30", "40", "50", "60"],
          ["01", "11", "21", "31", "41", "51", "61"],
          ["02", "12", "22", "32", "42", "52", "62"],
          ["03", "13", "23", "33", "43", "53", "63"],
          ["04", "14", "24", "34", "44", "54", "64"],
          ["05", "15", "25", "35", "45", "55", "65"],
          ["06", "16", "26", "36", "46", "56", "66"],
        ],
        winner: null,
        winnerMove: [],
        tie: false
      };
    },
  },
});

export const { 
  insertPiece, 
  resetBoard, 
  determineWinner, 
  determineTie
} = boardSlice.actions;

export default boardSlice.reducer;
