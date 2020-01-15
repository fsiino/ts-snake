import { Snake } from "./snake";

const CANVASBGCOLOR = 'transparent';
const CANVASBORDERCOLOR = 'black';
const GAMESPEED = 500;

export class Game {
  public canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private requestedFrameId: number = -1;

  public snake: Snake;

  private loopCount = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.snake = new Snake(canvas);

  }
  

  public clearCanvas() {
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

  private loop() {

    this.requestedFrameId = requestAnimationFrame(() => this.loop());
    console.log("looping");
    // console.log(++this.loopCount);
    this.snake.drawSnake();
    
    setTimeout(() => {
      this.clearCanvas(); 
      this.snake.advanceSnake(); 
      this.snake.drawSnake();
    }, GAMESPEED);

  }

  public startLoop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
  }

  public endLoop() {
    cancelAnimationFrame(this.requestedFrameId);
  }


}