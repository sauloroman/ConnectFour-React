import { createSlice } from "@reduxjs/toolkit";

export const playersSlice = createSlice({
  name: 'players',
  initialState: {
    player1: {
      name: '',
      victories: 0
    },
    player2: {
      name: '',
      victories: 0
    }
  },
  reducers: {

    setNamePlayer1: ( state, action ) => {
      return {
        ...state,
        player1: {
          ...state.player1,
          name: action.payload,
        }
      }
    },

    addVictoryPlayer1: ( state, _action ) => {
      return {
        ...state,
        player1: {
          ...state.player1,
          victories: state.player1.victories + 1,
        }
      }
    },

    setNamePlayer2: ( state, action ) => {
      return {
        ...state,
        player2: {
          ...state.player2,
          name: action.payload,
        }
      }
    },

    addVictoryPlayer2: ( state, _action ) => {
      return {
        ...state,
        player2: {
          ...state.player2,
          victories: state.player2.victories + 1,
        }
      }
    },

    resetPlayers: () => {
      return {
        player1: {
          name: '',
          victories: 0
        },
        player2: {
          name: '',
          victories: 0
        }
      }
    }

  }
})

export const { setNamePlayer1, setNamePlayer2, addVictoryPlayer1, addVictoryPlayer2, resetPlayers } = playersSlice.actions;

export default playersSlice.reducer;