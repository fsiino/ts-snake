import { Snake } from './snake';
import { Food } from './food';

// TODO: Move consts to its own file ?
const CANVASBGCOLOR = 'gray';
const CANVASBORDERCOLOR = 'black';
const GAMESPEED = 100;

export class Game {
  public canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private requestedFrameId: number = -1;

  public snake: Snake;
  public food: Food;
  public foodLoc: Array<number>;

  // private loopCount = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.food = new Food(canvas);
    this.foodLoc = this.food.foodLoc;
    this.snake = new Snake(canvas);
    this.food.createFood()
    // debugger
  }

  public clearCanvas(): void  {
    this.ctx.fillStyle = CANVASBGCOLOR;
    this.ctx.strokeStyle = CANVASBORDERCOLOR;
    this.ctx.fillRect(
      0, 
      0, 
      this.canvas.width, 
      this.canvas.height
    );
    this.ctx.strokeRect(
      0, 
      0, 
      this.canvas.width,
      this.canvas.height
    );
    this.food.drawFood();
  }

  // public ateFood(canvas: HTMLCanvasElement): void {
  //   if (this.snake.body[0].x === this.food.foodLoc[0] && this.snake.body[0].y === this.food.foodLoc[1]) {
  //     new Food(canvas);
  //   }
  // }

  private loop(): void  {
    // this.requestedFrameId = requestAnimationFrame(() => this.loop());
    // console.log("looping");
    // console.log(++this.loopCount);

    setTimeout(() => {
      this.clearCanvas(); 
      console.log('drawing food from Game...')
      // this.food.drawFood(this.food.foodLoc[0], this.food.foodLoc[1]); // TODO: still drawing old foodLoc after eating, not newly created foodLoc

      // Update this.food.foodLoc here??
      // this.food.foodLoc
      // debugger

      // this.food.drawFood();
      this.snake.moveSnake(this.food.foodLoc); 
      this.snake.drawSnake();
      this.loop();
    }, GAMESPEED);
  }

  public startLoop(): void  {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
  }

  public endLoop(): void  {
    cancelAnimationFrame(this.requestedFrameId);
  }

}