const FOODCOLOR = 'red';
const FOODSTROKECOLOR = 'black';

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
    this.ctx.fillStyle = FOODCOLOR;
    this.ctx.strokeStyle = FOODSTROKECOLOR;
    this.ctx.fillRect(
      // this.foodLoc[0],
      // this.foodLoc[1],
      x, y,
      10,
      10
    )
  }

  public updateFood(snake: any) {
    // determine collision with snake here and use it for loop
    // if collision, create and draw new food
    // else draw
  }

}