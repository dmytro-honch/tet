import { Game } from './game';
import { View } from './view';

export class Controller {
  game: Game;
  view: View;
  intervalID: NodeJS.Timeout;
  isPlaying: boolean = false;
  gameSpeed: number;

  constructor(game: Game, view: View) {
    this.game = game;
    this.view = view;
    this.intervalID = null;
    this.gameSpeed = 1000 - (this.game.getState().level + 1) * 100;

    document.addEventListener('keydown', this.handleKeydown.bind(this));
    this.view.renderStartScreen();
  }

  update() {
    this.game.movePeaceDown();
    this.view.render(this.game.getState());
  }

  play() {
    this.isPlaying = true;
    this.startTimer();
    this.update();
  }

  pause() {
    this.isPlaying = false;
    this.stopTimer();
    this.view.renderPauseScreen();
    // this.update();
  }

  startTimer() {
    if (!this.intervalID) {
      this.intervalID = setInterval(() => {
        this.update();
      }, this.gameSpeed);
    }
  }

  stopTimer() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = null;
    }
  }

  handleKeydown(event: KeyboardEvent) {
    switch (event.key.toLowerCase()) {
      case 'enter':
        this.view.render(this.game.getState());
        if (this.isPlaying) {
          this.pause();
        } else {
          this.play();
        }
        break;
      case 'arrowleft':
        this.game.movePeaceLeft();
        this.view.render(this.game.getState());
        break;
      case 'arrowup':
        this.game.rotatePiece();
        this.view.render(this.game.getState());
        break;
      case 'arrowright':
        this.game.movePeaceRight();
        this.view.render(this.game.getState());
        break;
      case 'arrowdown':
        this.game.movePeaceDown();
        this.view.render(this.game.getState());
        break;
    }
  }
}
