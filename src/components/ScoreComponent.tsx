import React from 'react';
import { useAppSelector } from '../hoocks';
import { selectTetrisStat } from '../store/tetrisReducer';

export function ScoreComponent() {
  const stat = useAppSelector(selectTetrisStat);

  return (
    <div className="tetris-score">
      <span>Lines: {stat.lines}</span>
      <span style={{ marginLeft: '1rem' }}>Score: {stat.score}</span>
      <span style={{ marginLeft: '1rem' }}>Level: {stat.level}</span>
    </div>
  );
}
