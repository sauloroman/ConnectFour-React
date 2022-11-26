import { createSlice } from "@reduxjs/toolkit";

export const startSlice = createSlice({
  name: 'startGame',
  initialState: "no",
  reducers: {

    setStartGame: ( _state, action ) => {
      return action.payload;
    },

    resetStartGame: () => {
      return "no";
    }

  }
})

export const { setStartGame, resetStartGame } = startSlice.actions;

export default startSlice.reducer;