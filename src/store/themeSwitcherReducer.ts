import { createSlice } from '@reduxjs/toolkit';
import { RootStateType } from './index';

const themeFromSessionStorage = sessionStorage.getItem('theme');

const initialState = {
  value: themeFromSessionStorage ? themeFromSessionStorage : 'defaultTheme',
};

const themeSwitcherSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state) {
      state.value = 'changedTheme';
    },
    changeThemeToDefault(state) {
      state.value = 'defaultTheme';
    },
  },
});

export default themeSwitcherSlice.reducer;
export const { changeTheme, changeThemeToDefault } = themeSwitcherSlice.actions;
export const selectTheme = (state: RootStateType) => state.theme.value;
