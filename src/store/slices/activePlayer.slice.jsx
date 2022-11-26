import { createSlice } from "@reduxjs/toolkit";

export const activePlayerSlice = createSlice({
  name: 'activePlayer',
  initialState: "Player1",
  reducers: {

    switchPlayer: ( state, _action ) => {
      return state === 'Player1' ? 'Player2' : 'Player1';
    },

    resetActivePlayer: () => {
      return 'Player1'
    }

  }
})

export const { switchPlayer, resetActivePlayer } = activePlayerSlice.actions;

export default activePlayerSlice.reducer;