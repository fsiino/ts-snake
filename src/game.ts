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
  public appleBite: any;
  private isPaused: boolean;
  // private loopCount = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.snake = new Snake(canvas);
    this.food = new Food(canvas);
    this.grid = new Grid(canvas);
    this.foodCoords = [];

    this.snake.body.forEach((part: any) => {
      if (part.x !== this.food.foodLoc[0] && part.y !== this.food.foodLoc[1]) {
        this.food.createFood(this.snake);
      }
    })

    this.food.drawFood(this.food.foodLoc[0], this.food.foodLoc[1])
    this.foodCoords.push(...[this.randomFood(0, this.canvasWidth - 10), this.randomFood(0, this.canvasHeight - 10)])
    this.currentScore = 0;
    this.appleBite = new Audio('./sound/appleBite.mp3');
    this.isPaused = false;
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

  private hitWall() {
    // Check if snake hits canvas boundaries:
    const head = this.snake.body[0];
    if (head.x < 0 || head.x > this.canvasWidth - 10 || head.y < 0 || head.y > this.canvasHeight - 10) {
      return true;
    }
  }

  private gameOver(): void {
    this.endLoop();
    this.highScore = this.currentScore;

    document.querySelector('#high-score').innerHTML = `High Score: ${this.currentScore}`

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

  private restart(): void {
    this.currentScore = 0;
    this.snake = new Snake(this.canvas);
    this.food = new Food(this.canvas);
    this.food.createFood(this.snake);
    this.snake.dx = 0;
    this.snake.dy = 10;
    this.startLoop();
  }

  private pauseGame() {
    if (this.isPaused) {
      this.endLoop();
      this.isPaused = false;
      console.log('unpause')
    } else {
      this.startLoop();
      this.isPaused = true;
      console.log('pause')
    }
  }

  private loop(): void  {
    // this.requestedFrameId = requestAnimationFrame(() => this.loop());
    // console.log("looping");
    // console.log(++this.loopCount);

    document.querySelector('.button-wrapper #pause-btn').addEventListener('click', e => {
      this.pauseGame();
    })

    if (this.hitWall()) {
      this.gameOver();
      return;
    };

    document.getElementById('score').innerHTML = `Score: ${this.currentScore}`;
    document.querySelector('.button-wrapper #mute-btn').addEventListener('click', e => {
      if (this.appleBite.muted) {
        this.appleBite.muted = false;
      } else {
        this.appleBite.muted = true;
      }
    })
    document.querySelector('.button-wrapper #pause-btn').addEventListener('click', e => {
      this.endLoop();
    })

    setTimeout((): void => {
      this.clearCanvas(); 

      if (this.ateFood()) {
        this.appleBite.play();
        this.food.createFood(this.snake);
        this.currentScore++;
      }
      
      this.grid.drawGrid();
      this.food.drawFood(this.food.foodLoc[0], this.food.foodLoc[1]);
      this.snake.moveSnake(this.food.foodLoc); 
      this.snake.drawSnake();

      this.loop();
    }, Settings.game.GAMESPEED);
  }

  public startLoop(): void  {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
  }

  public endLoop(): void  {
    cancelAnimationFrame(this.requestedFrameId);
  }
}