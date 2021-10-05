import React, { useEffect, useRef } from 'react';
import isMobile from 'react-device-detect';
import { ScoreComponent } from './ScoreComponent';
import { Game } from '../coreGames/tetris/game';
import { View } from '../coreGames/tetris/view';
import { Controller } from '../coreGames/tetris/controller';
import { BLOCKS_HEIGHT, BLOCKS_WIDTH } from '../coreGames/tetris/settings';

const globalObj: GlobalObjType = {
  controller: undefined,
  game: undefined,
  view: undefined,
};

export function Tetris() {
  const canvasRef = useRef(null);

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
  }, []);

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <ScoreComponent />
      </div>
      <div className={`tetris__canvas--wrapper${isMobile || true ? ' mobile' : ''}`}>
        {isMobile && (
          <div className="tetris__game-btn--wrapper left">
            <button id="pause" className="tetris__game-btn">
              ||
            </button>
            <button id="top" className="tetris__game-btn">
              ↑
            </button>
            <button id="bottom" className="tetris__game-btn">
              ↓
            </button>
          </div>
        )}

        <canvas className="tetris__canvas" width="320" height="640" ref={canvasRef} />

        {isMobile && (
          <div className="tetris__game-btn--wrapper right">
            <button id="left" className="tetris__game-btn">
              ←
            </button>
            <button id="right" className="tetris__game-btn">
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
