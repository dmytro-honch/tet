import React from 'react';
import { WelcomePage } from '../pages/WelcomePage';
import { LeaderBoard } from '../pages/LeaderBoard';
import { Error404 } from '../pages/Error404';

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
  {
    path: '/tet/leader-board',
    component: LeaderBoard,
    exact: true,
    key: 'LeaderBoard',
    title: 'Leader board',
  },
  {
    path: '*',
    component: Error404,
    exact: false,
    key: 'Error404',
    title: "Can't find such address",
  },
];
