import isMobile from 'react-device-detect';
import { Game } from './game';
import { View } from './view';
import { SPEED_MAP } from './settings';

export class Controller {
  game: Game;
  view: View;
  intervalID: NodeJS.Timeout;
  isPlaying: boolean = false;
  isOver: boolean = false;
  gameSpeed: number;
  currentLvl: number;

  constructor(game: Game, view: View) {
    this.game = game;
    this.view = view;
    this.intervalID = null;
    this.currentLvl = this.game.getState().level;
    this.gameSpeed = SPEED_MAP.get(this.currentLvl);

    if (isMobile) {
      setTimeout(() => {
        this.handleMobileActions();
      }, 100);
    } else {
      document.addEventListener('keydown', this.handleKeydown.bind(this));
    }

    this.view.renderStartScreen();
  }

  update() {
    const { level, isOver } = this.game.getState();

    if (isOver) {
      this.isOver = true;
      this.handleGameOver();
      return;
    }

    this.game.movePeaceDown();
    this.view.render(this.game.getState());

    if (this.currentLvl !== level) {
      this.currentLvl = level;
      this.gameSpeed = SPEED_MAP.get(this.currentLvl);

      this.stopTimer();
      this.startTimer();
    }
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
        this.handlePause();
        break;
      case 'arrowleft':
        this.handleLeft();
        break;
      case 'arrowup':
        this.handleUp();
        break;
      case 'arrowright':
        this.handleRight();
        break;
      case 'arrowdown':
        this.handleDown();
        break;
      default:
        break;
    }
  }

  handleMobileActions() {
    const pause = document.querySelector('#pause');
    const top = document.querySelector('#top');
    const down = document.querySelector('#bottom');
    const left = document.querySelector('#left');
    const right = document.querySelector('#right');

    if (!pause || !top || !down || !left || !right) {
      setTimeout(() => {
        this.handleMobileActions();
      }, 100);
      return;
    }

    pause.addEventListener('click', this.handlePause.bind(this));
    top.addEventListener('click', this.handleUp.bind(this));
    down.addEventListener('click', this.handleDown.bind(this));
    left.addEventListener('click', this.handleLeft.bind(this));
    right.addEventListener('click', this.handleRight.bind(this));
  }

  handlePause() {
    if (this.isOver) {
      return;
    }

    this.view.render(this.game.getState());

    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  handleUp() {
    if (this.isOver) {
      return;
    }
    this.game.rotatePiece();
    this.view.render(this.game.getState());
  }

  handleDown() {
    if (this.isOver) {
      return;
    }
    this.game.movePeaceDown();
    this.view.render(this.game.getState());
  }

  handleLeft() {
    if (this.isOver) {
      return;
    }
    this.game.movePeaceLeft();
    this.view.render(this.game.getState());
  }

  handleRight() {
    if (this.isOver) {
      return;
    }
    this.game.movePeaceRight();
    this.view.render(this.game.getState());
  }

  handleGameOver() {
    this.isPlaying = false;
    this.stopTimer();
    this.view.renderGameOverScreen();
  }
}
