import { PointsType } from './types';

export const BLOCKS_WIDTH = 10;
export const BLOCKS_HEIGHT = 20;

export enum Colors {
  '#ed4938',
  '#adc607',
  '#f4c10d',
  '#de3974',
  '#7b3dba',
  '#f87117',
  '#03cec2',
}

export const POINTS: PointsType = {
  '1': 40,
  '2': 120,
  '3': 300,
  '4': 1200,
};

export const LVL_MAP = setLvlMap();

// todo: don't forget speed link https://tetris.fandom.com/wiki/Tetris_(NES,_Nintendo)
function setLvlMap() {
  const lvlMap = new Map();

  lvlMap.set(0, 10);
  lvlMap.set(1, 20);
  lvlMap.set(2, 30);
  lvlMap.set(3, 40);
  lvlMap.set(4, 50);
  lvlMap.set(5, 60);
  lvlMap.set(6, 70);
  lvlMap.set(7, 80);
  lvlMap.set(8, 90);
  lvlMap.set(9, 100);
  lvlMap.set(10, 100);
  lvlMap.set(11, 100);
  lvlMap.set(12, 100);
  lvlMap.set(13, 100);
  lvlMap.set(14, 100);
  lvlMap.set(15, 100);
  lvlMap.set(16, 110);
  lvlMap.set(17, 120);
  lvlMap.set(18, 130);
  lvlMap.set(19, 140);
  lvlMap.set(20, 150);
  lvlMap.set(21, 160);
  lvlMap.set(22, 170);
  lvlMap.set(23, 180);
  lvlMap.set(24, 190);
  lvlMap.set(25, 200);

  return lvlMap;
}

export function calculatePointsForOneLine(currentLvl: number, birnLines: number) {
  return POINTS[birnLines] * (currentLvl + 1);
}

// todo: don't forget speed link https://listfist.com/list-of-tetris-levels-by-speed-nes-ntsc-vs-pal

export const SPEED_MAP = setSpeedMap();

function setSpeedMap() {
  const speedMap = new Map();

  speedMap.set(0, 15974 / BLOCKS_HEIGHT);
  speedMap.set(1, 14310 / BLOCKS_HEIGHT);
  speedMap.set(2, 12646 / BLOCKS_HEIGHT);
  speedMap.set(3, 10982 / BLOCKS_HEIGHT);
  speedMap.set(4, 9318 / BLOCKS_HEIGHT);
  speedMap.set(5, 7654 / BLOCKS_HEIGHT);
  speedMap.set(6, 5990 / BLOCKS_HEIGHT);
  speedMap.set(7, 4326 / BLOCKS_HEIGHT);
  speedMap.set(8, 2662 / BLOCKS_HEIGHT);
  speedMap.set(9, 1997 / BLOCKS_HEIGHT);
  speedMap.set(10, 1664 / BLOCKS_HEIGHT);
  speedMap.set(11, 1664 / BLOCKS_HEIGHT);
  speedMap.set(12, 1664 / BLOCKS_HEIGHT);
  speedMap.set(13, 1331 / BLOCKS_HEIGHT);
  speedMap.set(14, 1331 / BLOCKS_HEIGHT);
  speedMap.set(15, 1331 / BLOCKS_HEIGHT);
  speedMap.set(16, 998 / BLOCKS_HEIGHT);
  speedMap.set(17, 998 / BLOCKS_HEIGHT);
  speedMap.set(18, 998 / BLOCKS_HEIGHT);
  speedMap.set(19, 666 / BLOCKS_HEIGHT);
  speedMap.set(20, 666 / BLOCKS_HEIGHT);
  speedMap.set(21, 666 / BLOCKS_HEIGHT);
  speedMap.set(22, 666 / BLOCKS_HEIGHT);
  speedMap.set(23, 666 / BLOCKS_HEIGHT);
  speedMap.set(24, 666 / BLOCKS_HEIGHT);
  speedMap.set(25, 666 / BLOCKS_HEIGHT);
  speedMap.set(26, 666 / BLOCKS_HEIGHT);
  speedMap.set(27, 666 / BLOCKS_HEIGHT);
  speedMap.set(28, 666 / BLOCKS_HEIGHT);
  speedMap.set(29, 333 / BLOCKS_HEIGHT);

  return speedMap;
}
