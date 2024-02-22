import { Settings } from './constants';
import { Snake } from './snake';
import { Food } from './food';
import { Grid } from './grid';

export class Game {
  public canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private requestedFrameId: number = -1;
  private snake: Snake;
  private food: Food;
  private grid: Grid;
  public foodCoords: Array<any>
  public canvasWidth: number;
  public canvasHeight: number;
  public currentScore: number = 0;
  public highScore: number;

  public foodBite: any;
  public gameMusic: any;

  public biteMuted: boolean;
  public musicMuted: boolean;
  public musicMutedBeforePause: boolean;

  private isPaused: boolean;
  private gameOver: boolean;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.snake = new Snake(canvas);
    this.food = new Food(canvas);
    this.grid = new Grid(canvas);
    this.foodCoords = [];

    // Does not spawn food beneath snake at game start.
    this.snake.body.forEach((part: any) => {
      if (part.x !== this.food.foodLoc[0] && part.y !== this.food.foodLoc[1]) {
        this.food.createFood(this.snake);
      }
    })

    this.food.drawFood(this.food.foodLoc[0], this.food.foodLoc[1])
    this.foodCoords.push(...[this.randomFood(0, this.canvasWidth - 10), this.randomFood(0, this.canvasHeight - 10)])
    this.currentScore = 0;

    this.foodBite = new Audio('./sound/foodBite.mp3');
    this.biteMuted = false;

    this.gameMusic = new Audio('./sound/Hero_Dance_Party.mp3');
    this.musicMuted = true;
    this.musicMutedBeforePause = false;

    this.isPaused = false;
    this.gameOver = false;

    this.gameMusic.play();
    this.gameMusic.muted = true;
  }

  public clearCanvas(): void  {
    this.ctx.fillStyle = Settings.game.CANVASBGCOLOR;
    this.ctx.strokeStyle = Settings.game.CANVASBORDERCOLOR;
    this.ctx.fillRect(
      0, 0, this.canvas.width, this.canvas.height
    );
    this.ctx.strokeRect(
      0, 0, this.canvas.width, this.canvas.height
    );
  }

  private randomFood(min: number, max: number): number {
    let randomCoord = Math.round((Math.random() * (max - min) + min) / 10) * 10;
    return randomCoord;
  }

  private ateFood(): boolean {
    return this.snake.body[0].x === this.food.foodLoc[0] && this.snake.body[0].y === this.food.foodLoc[1];
  }

  private hitWall(): boolean {
    // Check if snake hits canvas boundaries:
    const head = this.snake.body[0];
    if (head.x < 0 || head.x > this.canvasWidth - 10 || head.y < 0 || head.y > this.canvasHeight - 10) {
      return true;
    }
    return false;
  }

  private hitSelf(): boolean {
    for (let i = 4; i < this.snake.body.length; i++) {
      if (this.snake.body[i].x === this.snake.body[0].x && this.snake.body[i].y === this.snake.body[0].y) {
        return true;
      }
    }
    return false;
  }

  private endGame(): void {
    // this.endLoop();
    this.gameOver = true;

    if (!this.musicMuted) {
      this.toggleMusic();
    }

    this.highScore = this.currentScore;

    document.querySelector('#high-score span').innerHTML = `${this.currentScore}`

    this.ctx.fillStyle = 'white';
    this.ctx.strokeStyle = 'black';
    this.ctx.textAlign = 'center';
    this.ctx.font = '18pt Arial';
    this.ctx.fillText('Game Over', this.canvasWidth / 2, (this.canvasHeight / 2) - 20)
    this.ctx.textAlign = 'center';
    this.ctx.font = '12pt Arial';
    this.ctx.fillText(`You scored ${this.currentScore}`, this.canvasWidth / 2, (this.canvasHeight / 2) + 2)
    this.ctx.textAlign = 'center';
    this.ctx.font = '12pt Arial';
    this.ctx.fillText('Press Enter to play again', this.canvasWidth / 2, (this.canvasHeight / 2) + 24)

    document.addEventListener('keydown', e => {
      if (e.keyCode === 13) this.restart();
    })
  }

  public showStartScreen(): void {
    this.ctx.fillStyle = 'white';
    this.ctx.strokeStyle = 'black';
    this.ctx.textAlign = 'center';
    this.ctx.font = '12pt Arial';
    this.ctx.fillText('Press Enter Start', this.canvasWidth / 2, (this.canvasHeight / 2) + 2)

    document.addEventListener('keydown', e => {
      if (e.keyCode === 13) this.startLoop();
    })
  }

  private restart(): void {
    this.gameOver = false;
    this.currentScore = 0;
    this.snake = new Snake(this.canvas);
    this.food = new Food(this.canvas);
    this.food.createFood(this.snake);
    this.snake.dx = 0;
    this.snake.dy = 10;
    this.startLoop();
  }

  // TODO: Preserve !musicMuted when pausing + unpausing
  private pauseGame(action: String): void {
    if (this.musicMuted) {
      this.musicMutedBeforePause = true;
    } else {
      this.musicMutedBeforePause = false;
    }

    if (action === 'pause') {
      this.isPaused = true;
      this.gameMusic.muted = true;
    } else if (action === 'unpause') {
      if (this.musicMutedBeforePause) {
        this.isPaused = false;
        this.gameMusic.muted = true;
      } else {
        this.isPaused = false;
        this.gameMusic.muted = false;
      }
    }
  }

  private toggleMusic(): void {
    if (this.musicMuted) {
      setTimeout(() => {
        this.musicMuted = false;
        document.getElementById('music-mute-btn').innerHTML = 'Mute Music'
        this.gameMusic.muted = false;
      }, Settings.game.GAMESPEED)
    } else {
      setTimeout(() => {
        this.musicMuted = true;
        document.getElementById('music-mute-btn').innerHTML = 'Unmute Music'
        this.gameMusic.muted = true;
      }, Settings.game.GAMESPEED)
    }
  }

  private toggleSFX(): void {
    if (this.biteMuted) {
      setTimeout(() => {
        this.biteMuted = false;
        document.getElementById('bite-mute-btn').innerHTML = 'Mute SFX'
        this.foodBite.muted = false;
      }, Settings.game.GAMESPEED)
    } else {
      setTimeout(() => {
        this.biteMuted = true;
        document.getElementById('bite-mute-btn').innerHTML = 'Unmute SFX'
        this.foodBite.muted = true;
      }, Settings.game.GAMESPEED)
    }
  }

  private loop(): void  {
    if (this.hitWall() || this.hitSelf()) {
      this.endGame();
      return;
    };

    document.querySelector('.button-wrapper #pause-btn').addEventListener('click', () => {
      if (!this.isPaused) {
        setTimeout(() => {
          this.pauseGame('pause');
          document.getElementById('pause-btn').innerHTML = 'Unpause Game';
        }, Settings.game.GAMESPEED);
      } else {
        setTimeout(() => {
          this.pauseGame('unpause');
          document.getElementById('pause-btn').innerHTML = 'Pause Game';
        }, Settings.game.GAMESPEED);
      }
    })

    document.querySelector('.button-wrapper #bite-mute-btn').addEventListener('click', () => {
      this.toggleSFX();
    })

    document.querySelector('.button-wrapper #music-mute-btn').addEventListener('click', () => {
      this.toggleMusic();
    })

    document.querySelector('#score span').innerHTML = `${this.currentScore}`;

    setTimeout((): void => {
      if (!this.isPaused) {
        this.clearCanvas();

        if (this.ateFood()) {
          this.foodBite.play();
          this.food.createFood(this.snake);
          this.currentScore++;
        }

        this.grid.drawGrid();
        this.food.drawFood(this.food.foodLoc[0], this.food.foodLoc[1]);

        this.snake.moveSnake(this.food.foodLoc);
        this.snake.drawSnake();
        this.loop();
      }

    }, Settings.game.GAMESPEED);
  }

  public startLoop(): void  {
    cancelAnimationFrame(this.requestedFrameId);
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
  }

  // public endLoop(): void  {
  //   cancelAnimationFrame(this.requestedFrameId);
  // }
}