import { createSlice } from '@reduxjs/toolkit';
import { RootStateType } from './index';

const initialState = {
  score: 0,
  lines: 0,
  level: 0,
  isGameOver: false,
  isGamePlaying: false,
};

const tetrisSlice = createSlice({
  name: 'tetris',
  initialState,
  reducers: {
    increaseStats(state, action) {
      state.score = action.payload.score;
      state.level = action.payload.level;
      state.lines = action.payload.lines;
    },
    clearStats(state) {
      state.score = 0;
      state.level = 0;
      state.lines = 0;
    },
    gameOver(state, action) {
      state.isGameOver = action.payload;
    },
    gamePlaying(state, action) {
      state.isGamePlaying = action.payload;
    },
  },
});

export default tetrisSlice.reducer;
export const { increaseStats, clearStats, gameOver, gamePlaying } = tetrisSlice.actions;
export const selectTetrisStat = (state: RootStateType) => state.tetris;
export const selectIsTetrisOver = (state: RootStateType) => state.tetris.isGameOver;
export const selectIsTetrisStarted = (state: RootStateType) => state.tetris.isGamePlaying;
