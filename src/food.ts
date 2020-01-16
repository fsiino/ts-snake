const FOODCOLOR = 'red';
const FOODSTROKECOLOR = 'black';

export class Food {
  public ctx: CanvasRenderingContext2D;

  public foodLoc: Array<number> = [50, 50]

  public canvasWidth: number;
  public canvasHeight: number;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
    
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
  }

  //TODO: Make tunable with constant
  public randomFoods(min: number, max: number): number { 
    let randomCoord = Math.round(Math.random() * (max-min) * 10);
    return randomCoord;
  }

  public createFood(): Array<number> {
    let foodX = this.randomFoods(0, this.canvasWidth - 10);
    let foodY = this.randomFoods(0, this.canvasHeight - 10)
    return [foodX, foodY]
  }

  public drawFood() {
    this.createFood();
    this.ctx.fillStyle = FOODCOLOR;
    this.ctx.strokeStyle = FOODSTROKECOLOR;
    this.ctx.fillRect(
      this.foodLoc[0],
      this.foodLoc[1],
      10,
      10
    )
  }

}