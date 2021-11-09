import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import themeSwitcherReducer from './themeSwitcherReducer';
import tetrisReducer from './tetrisReducer';
import menuReducer from './menuReducer';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  devTools: true,
  middleware,
  reducer: {
    theme: themeSwitcherReducer,
    menuState: menuReducer,
    tetris: tetrisReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
