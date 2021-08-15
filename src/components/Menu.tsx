import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hoocks';
import { hideMenu, selectMenuState } from '../store/menuReducer';
import { routingTree } from '../routing/rouringTree';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Menu() {
  const isShowMenu = useAppSelector(selectMenuState);
  const dispatch = useAppDispatch();

  const closeMenu = () => {
    dispatch(hideMenu());
  }

  return <>
    <div className={`menu__wrapper${isShowMenu ? ' show' : ''}`}>
      <ThemeSwitcher />
      <ul className="menu">
        {routingTree && routingTree.map((item) => (
          <li className="menu__item" key={item.key}>
            <NavLink to={item.path}
                     onClick={closeMenu}
                     activeClassName="active"
                     className="menu__link"
                     exact>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </>;
}
