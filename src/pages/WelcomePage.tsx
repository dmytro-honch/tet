import React from 'react';
import { Link } from 'react-router-dom';

export function WelcomePage() {
  return (
    <div className="wrapper">
      <h1 className="">Welcome to the Games!</h1>
      <h2>Pick the game do you want play:</h2>
      <ul className="wp__menu">
        <li>
          <Link className="link" to="/tet/play-tetris">
            Tetris
          </Link>
        </li>
        <li>
          <Link className="link" to="/tet/leader-board">
            Leader board
          </Link>
        </li>
      </ul>
    </div>
  );
}
