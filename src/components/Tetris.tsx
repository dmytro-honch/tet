import React, { useEffect, useRef, useState } from 'react';
import { ScoreComponent } from './ScoreComponent';
import { Game } from '../coreGames/tetris/game';
import { View } from '../coreGames/tetris/view';
import { Controller } from '../coreGames/tetris/controller';
import { BLOCKS_HEIGHT, BLOCKS_WIDTH } from '../coreGames/tetris/settings';
import { useAppSelector } from '../hoocks';
import { gameOver, increaseStats, selectIsTetrisOver, selectIsTetrisStarted } from '../store/tetrisReducer';
import { store } from '../store';
import { ifDeviceHasTouch } from '../utills/detectDevice';

const globalObj: GlobalObjType = {
  controller: undefined,
  game: undefined,
  view: undefined,
};

export function Tetris() {
  const canvasRef = useRef(null);
  const isOver = useAppSelector(selectIsTetrisOver);
  const isPlaying = useAppSelector(selectIsTetrisStarted);
  const [gamesAmount, setGamesAmount] = useState(0);
  const isTouch = ifDeviceHasTouch();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas?.getContext('2d')) {
      const game = new Game();
      const view = new View(canvas.getContext('2d'), 320, 640, BLOCKS_HEIGHT, BLOCKS_WIDTH);
      const controller = new Controller(game, view);

      globalObj.game = game;
      globalObj.view = view;
      globalObj.controller = controller;
    } else {
      console.error('problems with canvas');
    }
  }, [gamesAmount]);

  const resetGame = () => {
    store.dispatch(gameOver(false));
    store.dispatch(increaseStats({ score: 0, level: 0, lines: 0 }));
    setGamesAmount((prevAmount) => prevAmount + 1);
    const canvas = canvasRef.current;
    if (canvas?.getContext('2d')) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, BLOCKS_WIDTH, BLOCKS_HEIGHT);
    } else {
      console.error('problems with canvas');
    }
  };

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        {isOver && (
          <button className="tetris__reset" onClick={resetGame}>
            reset
          </button>
        )}
        <ScoreComponent />
      </div>
      <div className={`tetris__canvas--wrapper${!isTouch ? ' mobile' : ''}`}>
        {isTouch && !isOver && (
          <div className="tetris__game-btn--wrapper left">
            <button id="pause" className="tetris__game-btn pause">
              {isPlaying ? '║' : '►'}
            </button>
            <button id="top" className="tetris__game-btn top">
              ↑
            </button>
            <button id="bottom" className="tetris__game-btn down">
              ↓
            </button>
          </div>
        )}

        <canvas className="tetris__canvas" width="320" height="640" ref={canvasRef} />

        {isTouch && !isOver && (
          <div className="tetris__game-btn--wrapper right">
            <button id="left" className="tetris__game-btn left">
              ←
            </button>
            <button id="right" className="tetris__game-btn right">
              →
            </button>
          </div>
        )}
      </div>
    </>
  );
}

interface GlobalObjType {
  controller: Controller;
  game: Game;
  view: View;
}
