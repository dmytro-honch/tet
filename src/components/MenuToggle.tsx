import React from 'react';
import { useAppDispatch, useAppSelector } from '../hoocks';
import { selectMenuState, openMenu, hideMenu } from '../store/menuReducer';

export function MenuToggle() {
  const dispatch = useAppDispatch();
  const isShowMenu = useAppSelector(selectMenuState);

  const toggleMenu = () => {
    return isShowMenu ? dispatch(hideMenu()) : dispatch(openMenu());
  };

  return (
    <button
      onClick={toggleMenu}
      className={`menu__close${isShowMenu ? ' active' : ''}`}
      aria-label="toggle main menu"
      aria-roledescription="button"
    >
      <svg width="50" height="50" viewBox="0 0 50 50" className="menu__close--svg" xmlns="http://www.w3.org/2000/svg">
        <path className="top" d="M 10,10 L 40,10" />
        <path className="middle" d="M 15,25 L 35,25" />
        <path className="bottom" d="M 10,40 L 40,40" />
      </svg>
    </button>
  );
}
