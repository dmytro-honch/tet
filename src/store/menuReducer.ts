import { createSlice } from '@reduxjs/toolkit';
import { RootStateType } from './index';

const initialState = {
  isShow: false
};


const menuStateSlice = createSlice({
  name: 'showMenu',
  initialState,
  reducers: {
    openMenu(state) {
      state.isShow = true;
    },
    hideMenu(state) {
      state.isShow = false;
    }
  }
});

export default menuStateSlice.reducer;
export const { openMenu, hideMenu } = menuStateSlice.actions;
export const selectMenuState = (state: RootStateType) => state.menuState.isShow;
