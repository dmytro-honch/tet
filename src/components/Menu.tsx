import React from 'react';
import { useAppDispatch, useAppSelector } from '../hoocks';
import { hideMenu, selectMenuState } from '../store/menuReducer';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Menu() {
  const isShowMenu = useAppSelector(selectMenuState);
  const dispatch = useAppDispatch();

  const closeMenu = () => {
    dispatch(hideMenu());
  };

  return (
    <>
      <div className={`menu__wrapper${isShowMenu ? ' show' : ''}`} onClick={closeMenu}>
        <ThemeSwitcher />
      </div>
    </>
  );
}
