import React, { useEffect, useRef } from 'react';
import { ScoreComponent } from './ScoreComponent';
import { Game } from '../coreGames/tetris/game';
import { View } from '../coreGames/tetris/view';
import { Controller } from '../coreGames/tetris/controller';

interface GlobalObjType {
  controller?: Controller;
  game?: Game;
  view?: View;
}

export function Tetris() {
  const canvasRef = useRef(null);

  const globalObj: GlobalObjType = {};

  useEffect(() => {
    const canvas =  canvasRef.current;

    if (canvas?.getContext('2d')) {
      const game = new Game();
      const view = new View(canvas.getContext('2d'), 320, 640, 20, 10);
      const controller = new Controller(game, view);


      // @ts-ignore
      globalObj.game = game;
      // @ts-ignore
      globalObj.view = view;
      // @ts-ignore
      globalObj.controller = controller;
    } else {
      console.log('problems with canvas')
    }
  }, []);

  const pause = (event: any) => {
    // @ts-ignore
    if (globalObj.controller?.isPlaying) {
      globalObj.controller.pause();
      event.target.blur();
    }
  }


  return <>
    <div style={{marginBottom: '1rem'}}>
      <ScoreComponent />
      <button onClick={(event) => pause(event)}>pause</button>
    </div>
    <div className="tetris__canvas--wrapper">
      <canvas className="tetris__canvas" width="320" height="640" ref={canvasRef}/>
    </div>
  </>
}
