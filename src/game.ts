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

  // private loopCount = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.snake = new Snake(canvas);
    this.food = new Food(canvas);
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
  }

  private loop(): void  {
    // this.requestedFrameId = requestAnimationFrame(() => this.loop());
    console.log("looping");
    // console.log(++this.loopCount);
    this.food.createFood();
    this.snake.drawSnake();
    
    setTimeout(() => {
      this.clearCanvas(); 

      this.food.drawFood();
      
      this.snake.moveSnake(); 
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