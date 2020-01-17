import { Settings } from './constants';

export class Food {
  public ctx: CanvasRenderingContext2D;
  public foodLoc: Array<number>;
  public canvasWidth: number;
  public canvasHeight: number;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.foodLoc = [];
  }

  public randomFood(min: number, max: number): number { 
    let randomCoord = Math.round((Math.random() * (max-min) + min) / 10) * 10;
    return randomCoord;
  }

  public createFood(): void {
    let foodX = this.randomFood(0, this.canvasWidth - 10);
    let foodY = this.randomFood(0, this.canvasHeight - 10)
    this.foodLoc = [foodX, foodY]
  }

  public drawFood(x: number, y: number) {
    this.ctx.fillStyle = Settings.food.FOODCOLOR;
    this.ctx.strokeStyle = Settings.food.FOODSTROKECOLOR;
    this.ctx.fillRect(
      x, y, 10, 10
    )
  }

}