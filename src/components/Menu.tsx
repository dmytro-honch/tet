import React from 'react';
import { NavLink } from 'react-router-dom';
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
      <div className={`menu__wrapper${isShowMenu ? ' show' : ''}`}>
        <ThemeSwitcher />
        <ul className="menu">
          <li className="menu__item">
            <NavLink to="/tet" onClick={closeMenu} activeClassName="active" className="menu__link" exact>
              Home
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/tet/play-tetris" onClick={closeMenu} activeClassName="active" className="menu__link" exact>
              Tetris
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
