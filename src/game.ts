import { Settings } from './constants';
import { Snake } from './snake';
import { Food } from './food';
import { Grid } from './grid';

export class Game {
  public canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private requestedFrameId: number = -1;
  public snake: Snake;
  public food: Food;
  public grid: Grid;
  public foodCoords: Array<any>
  public canvasWidth: number;
  public canvasHeight: number;
  public currentScore: number;
  public appleBite: any;
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

  public randomFood(min: number, max: number): number {
    let randomCoord = Math.round((Math.random() * (max - min) + min) / 10) * 10;
    return randomCoord;
  }

  public ateFood(): boolean {
    return this.snake.body[0].x === this.food.foodLoc[0] && this.snake.body[0].y === this.food.foodLoc[1]
  }

  private loop(): void  {
    // this.requestedFrameId = requestAnimationFrame(() => this.loop());
    // console.log("looping");
    // console.log(++this.loopCount);

    setTimeout((): void => {
      this.clearCanvas(); 

      if (this.ateFood()) {
        this.appleBite.play();
        this.food.createFood(this.snake);
        this.currentScore++;
        document.getElementById('score').innerHTML = `Score: ${this.currentScore}`;
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