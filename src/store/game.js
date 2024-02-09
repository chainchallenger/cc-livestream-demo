import { createSlice } from "@reduxjs/toolkit";

export const game = createSlice({
  name: "game",
  initialState: {
    games: [
      {
        title: "Big Time",
        pp: "./images/gamespp/BigTime.png",
      },
      {
        title: "MATR1X FIRE",
        pp: "./images/gamespp/MATR1XFIRE.png",
      },
      {
        title: "XOCIETY",
        pp: "./images/gamespp/XOCIETY.png",
      },
      {
        title: "Shrapnel",
        pp: "./images/gamespp/Shrapnel.png",
      },
      {
        title: "Space Nation",
        pp: "./images/gamespp/SpaceNation.png",
      },
    ],
  },
});

export default game.reducer;
