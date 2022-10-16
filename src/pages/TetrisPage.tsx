import React from 'react';
import { Tetris } from '../components/Tetris';
import { CounterFPS } from '../components/CounterFPS';

export function TetrisPage() {
  return (
    <>
      <CounterFPS />
      <div className="wrapper ta__center">
        <Tetris />
      </div>
    </>
  );
}
