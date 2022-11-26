import { createSlice } from "@reduxjs/toolkit";

export const typeOfGameSlice = createSlice({
  name: 'typeOfGame',
  initialState: null,
  reducers: {

    setTypeOfGame: ( _state, action ) => {
      return action.payload;
    },

    resetTypeOfGame: () => {
      return null;
    }

  }
})

export const { setTypeOfGame, resetTypeOfGame } = typeOfGameSlice.actions;

export default typeOfGameSlice.reducer;