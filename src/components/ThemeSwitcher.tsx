import React from 'react';
import { useAppDispatch, useAppSelector } from '../hoocks';
import { changeTheme, changeThemeToDefault, selectTheme } from '../store/themeSwitcherReducer';
import icon_d from '../../src/assets/img/switch_d.png';
import icon_n from '../../src/assets/img/switch_n.png';

export function ThemeSwitcher() {
  const currentTheme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const changeThemeHandle = (event: any) => {
    const action = (currentTheme === 'defaultTheme') ?
      changeTheme() :
      changeThemeToDefault();

    dispatch(action);
    sessionStorage.setItem('theme', (currentTheme === 'defaultTheme') ? 'changedTheme' : 'defaultTheme');
    event.currentTarget.blur();
  }

  return (
    <button onClick={(event: any) => changeThemeHandle(event)}
            id="color-switcher"
            className="tetris__color-switch"
            type="button">
      <SunAndMoon currentTheme={currentTheme}/>
    </button>
  );
}


function SunAndMoon({ currentTheme }: {currentTheme: string}) {
  return <>
    <svg width="200" height="200" viewBox="0 0 200 200">
      {currentTheme === 'defaultTheme' ?
        <image href={icon_d} /> :
        <image href={icon_n} /> }
    </svg>
  </>;
}
