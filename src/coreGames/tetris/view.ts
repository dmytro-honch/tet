import { DrawMessagesType, PieceType, PlayfieldObjType, PlayfieldType } from './types';
import { Colors } from './settings';

export class View {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
  rows: number;
  columns: number;
  blockWidth: number;
  blockHeight: number;
  borderWidth: number;

  constructor(context: CanvasRenderingContext2D, width: number, height: number, rows: number, columns: number) {
    this.width = width;
    this.height = height;
    this.rows = rows;
    this.columns = columns;

    this.context = context;

    this.borderWidth = 2;
    this.blockWidth = (this.width - this.borderWidth * 2) / columns;
    this.blockHeight = (this.height - this.borderWidth * 2) / rows;
  }

  render({ playfield, next }: PlayfieldObjType) {
    this.clearScreen();
    this.renderPlayfield(playfield);
    this.renderNext(next);
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  renderStartScreen() {
    this.drawMessages([
      {
        message: 'Press ENTER to play game',
        x: this.width / 2,
        y: this.height / 2,
      },
    ]);
  }

  renderPauseScreen() {
    this.drawMessages([
      {
        message: 'PAUSE',
        x: this.width / 2,
        y: (this.height - 25) / 2,
      },
      {
        message: 'Press ENTER to resume',
        x: this.width / 2,
        y: (this.height + 25) / 2,
      },
    ]);
  }

  renderGameOverScreen() {
    this.drawMessages([
      {
        message: 'GAME OVER',
        x: this.width / 2,
        y: this.height / 2,
      },
    ]);
  }

  drawMessages(messagesArray: DrawMessagesType[]) {
    this.context.fillStyle = 'rgba(0,0,0,.8)';
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fillStyle = 'white';
    this.context.font = '18px sans-serif';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    messagesArray.forEach((item) => {
      this.context.fillText(item.message, item.x, item.y);
    });
  }

  renderPlayfield(playfield: PlayfieldType) {
    for (let y = 0; y < playfield.length; y++) {
      const line = playfield[y];

      for (let x = 0; x < line.length; x++) {
        const block = playfield[y][x];

        if (block) {
          this.renderBlock(
            this.borderWidth + x * this.blockWidth,
            this.borderWidth + y * this.blockHeight,
            this.blockWidth,
            this.blockHeight,
            Colors[playfield[y][x] - 1],
          );
        }
      }
    }
  }

  renderNext(nextPiece: PieceType) {
    const { blocks } = nextPiece;

    for (let y = 0; y < blocks.length; y++) {
      for (let x = 0; x < blocks[y].length; x++) {
        if (blocks[y][x]) {
          this.context.fillStyle = Colors[blocks[y][x] - 1] + '33';
          this.context.fillRect(x * 10 + (this.width - 40), y * 10 + 10, 10, 10);
        }
      }
    }
  }

  renderBlock(x: number, y: number, width: number, height: number, color: string) {
    this.context.fillStyle = color;
    this.context.strokeStyle = '#333';
    this.context.lineWidth = 2;

    this.context.fillRect(x, y, width, height);

    this.context.strokeRect(x, y, width, height);
  }
}
