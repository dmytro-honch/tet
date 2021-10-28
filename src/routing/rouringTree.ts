import React from 'react';
import { WelcomePage } from '../pages/WelcomePage';

const TetrisPage = React.lazy(() => import('../pages/TetrisPage'));

export const routingTree = [
  {
    path: '/tet',
    component: WelcomePage,
    exact: true,
    key: 'WelcomePage',
    title: 'Home',
  },
  {
    path: '/tet/play-tetris',
    component: TetrisPage,
    exact: true,
    key: 'TetrisPage',
    title: 'Tetris',
  },
];
