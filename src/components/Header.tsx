import React from 'react';
import { Menu } from './Menu';
import { MenuToggle } from './MenuToggle';


export function Header() {
  return <header className="header">
    <MenuToggle />
    <Menu />
  </header>;
}
