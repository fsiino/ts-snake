import { Snake } from "./snake";
import { Food } from "./food";

export class Game {
  public canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private requestedFrameId: number = -1;

  private snake: Snake;
  private food: Food;

  private loopCount = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.snake = new Snake(canvas);
    this.food = new Food(canvas);
  }

  private loop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
    // console.log("looping");
    // console.log(++this.loopCount);
    this.snake.spawn();
    this.snake.animate();
    this.snake.slither();
    
    this.food.spawn();
  }

  startLoop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
  }

  endLoop() {
    cancelAnimationFrame(this.requestedFrameId);
  }
}
