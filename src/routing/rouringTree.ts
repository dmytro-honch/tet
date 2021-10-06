import React from 'react';
import { WelcomePage } from '../pages/WelcomePage';

const TetrisPage = React.lazy(() => import('../pages/TetrisPage'));

export const routingTree = [
  {
    path: '/',
    component: WelcomePage,
    exact: true,
    key: 'WelcomePage',
    title: 'Home',
  },
  {
    path: '/play-tetris',
    component: TetrisPage,
    exact: true,
    key: 'TetrisPage',
    title: 'Tetris',
  },
  {
    path: '*',
    component: WelcomePage,
    key: 'WelcomePage 2',
    title: 'Welcome to games!',
  },
];
