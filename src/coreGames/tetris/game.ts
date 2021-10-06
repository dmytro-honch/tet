import { PieceType, PlayfieldType } from './types';
import { calculatePointsForOneLine, LVL_MAP } from './settings';
import { gameOver, increaseStats } from '../../store/tetrisReducer';
import { store } from '../../store';
import { createBlockHelper } from './helpers';

export class Game {
  score = 0;
  lines = 0;
  playfield: PlayfieldType = this.createPlayfield();
  activePiece: PieceType = this.createPiece();
  nextPiece: PieceType = this.createPiece();
  isOver = false;
  currentLvl = 0;
  nextLvlUp = LVL_MAP.get(this.currentLvl);

  get level() {
    return Math.floor(this.lines * 0.1);
  }

  getState() {
    const playfield = this.createPlayfield();
    const { blocks, x: pX, y: pY } = this.activePiece;

    for (let y = 0; y < this.playfield.length; y++) {
      playfield[y] = [];

      for (let x = 0; x < this.playfield[y].length; x++) {
        playfield[y][x] = this.playfield[y][x];
      }
    }

    for (let y = 0; y < blocks.length; y++) {
      for (let x = 0; x < blocks[y].length; x++) {
        if (blocks[y] && blocks[y][x]) {
          // fix for hidden blocks
          if (playfield[pY + y] && [pX + x]) {
            playfield[pY + y][pX + x] = blocks[y][x];
          }
        }
      }
    }

    return { playfield, next: this.nextPiece, level: this.level, isOver: this.isOver };
  }

  createPlayfield() {
    const playfield: PlayfieldType = [];

    for (let y = 0; y < 20; y++) {
      playfield[y] = [];

      for (let x = 0; x < 10; x++) {
        playfield[y][x] = 0;
      }
    }

    return playfield;
  }

  createPiece(): PieceType {
    const index = Math.floor(Math.random() * 7);
    const type = 'IJLOSTZ'[index];
    const piece: PieceType = { x: 0, y: 0 };

    piece.blocks = createBlockHelper(type);
    piece.x = Math.ceil((10 - piece.blocks[0].length) / 2);
    piece.y = -1;

    return piece;
  }

  movePeaceLeft() {
    this.activePiece.x -= 1;

    if (this.isCollision()) {
      this.activePiece.x += 1;
    }
  }

  movePeaceRight() {
    this.activePiece.x += 1;

    if (this.isCollision()) {
      this.activePiece.x -= 1;
    }
  }

  movePeaceDown() {
    if (this.isOver) {
      return;
    }

    this.activePiece.y += 1;

    if (this.isCollision()) {
      this.activePiece.y -= 1;
      this.lockPiece();
      const clearedLines = this.clearLines();
      this.updateScore(clearedLines);
      this.updatePieces();
    }
  }

  rotatePiece() {
    this.rotateBlocks();

    if (this.isCollision()) {
      this.rotateBlocks(false);
    }
  }

  rotateBlocks(clockwise: boolean = true) {
    const { blocks } = this.activePiece;
    const length = blocks.length;
    const x = Math.floor(length / 2);
    const y = length - 1;

    // Standard Rotate Algorithm
    for (let i = 0; i < x; i++) {
      for (let j = i; j < y - i; j++) {
        const temp = blocks[i][j];

        if (clockwise) {
          // by clockwise rotation
          blocks[i][j] = blocks[y - j][i];
          blocks[y - j][i] = blocks[y - i][y - j];
          blocks[y - i][y - j] = blocks[j][y - i];
          blocks[j][y - i] = temp;
        } else {
          // opposite direction if there is collision
          blocks[i][j] = blocks[j][y - i];
          blocks[j][y - i] = blocks[y - i][y - j];
          blocks[y - i][y - j] = blocks[y - j][i];
          blocks[y - j][i] = temp;
        }
      }
    }
  }

  isCollision(): boolean {
    const { blocks, x: pX, y: pY } = this.activePiece;

    for (let y = 0; y < blocks.length; y++) {
      for (let x = 0; x < blocks[y].length; x++) {
        if (
          blocks[y][x] &&
          (this.playfield[pY + y] === undefined ||
            this.playfield[pY + y][pX + x] === undefined ||
            this.playfield[pY + y][pX + x])
        ) {
          return true;
        }
      }
    }

    return false;
  }

  lockPiece() {
    const { blocks, x: pX, y: pY } = this.activePiece;

    if (pY < 0) {
      this.isOver = true;
      store.dispatch(gameOver(true));
      return;
    }

    for (let y = 0; y < blocks.length; y++) {
      for (let x = 0; x < blocks[y].length; x++) {
        if (blocks[y] && blocks[y][x]) {
          try {
            this.playfield[pY + y][pX + x] = blocks[y][x];
          } catch (err) {
            this.isOver = true;
          }
        }
      }
    }
  }

  clearLines() {
    const rows = 20;
    const columns = 10;
    const lines = [];

    for (let y = rows - 1; y >= 0; y--) {
      let numberOfBlocks = 0;

      for (let x = 0; x < columns; x++) {
        if (this.playfield[y][x]) {
          numberOfBlocks += 1;
        }
      }

      if (numberOfBlocks === 0) {
        break;
      } else if (numberOfBlocks === columns) {
        lines.unshift(y);
      }
    }

    let index;
    for (index of lines) {
      this.playfield.splice(index, 1);
      this.playfield.unshift(new Array(columns).fill(0));
    }

    return lines.length;
  }

  updateScore(clearedLines: number) {
    if (clearedLines > 0) {
      this.score += calculatePointsForOneLine(this.level, clearedLines);
      this.lines += clearedLines;
      this.nextLvlUp -= clearedLines;

      if (this.nextLvlUp <= 0) {
        this.lvlUp();
      }
    }

    store.dispatch(
      increaseStats({
        score: this.score,
        level: this.level,
        lines: this.lines,
      }),
    );
  }

  lvlUp() {
    const lowerZero = this.nextLvlUp;
    const nextLvl = LVL_MAP.get(this.currentLvl);

    this.currentLvl = this.currentLvl + 1;
    this.nextLvlUp = nextLvl ? nextLvl + lowerZero : 200 + lowerZero;
  }

  updatePieces() {
    this.activePiece = this.nextPiece;
    this.nextPiece = this.createPiece();
  }
}
