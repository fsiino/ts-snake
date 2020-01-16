const FOODCOLOR = 'red';
const FOODSTROKECOLOR = 'black';

export class Food {
  public ctx: CanvasRenderingContext2D;

  // public foodLoc: Array<number>
  public foodX: number;
  public foodY: number;

  public canvasWidth: number;
  public canvasHeight: number;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
    // this.foodLoc = [];

    this.foodX = 50;
    this.foodY = 50;
    
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
  }

  //TODO: Make tunable with constant
  public randomFoods(min: number, max: number): number { 
    let randomCoord = Math.round(Math.random() * (max-min) * 10);
    return randomCoord;
  }

  public createFood(): void {
    this.foodX = this.randomFoods(0, this.canvasWidth - 10);
    this.foodY = this.randomFoods(0, this.canvasHeight - 10)
    // this.foodLoc.push(foodX, foodY)
  }

  public drawFood() {
    
    this.ctx.fillStyle = FOODCOLOR;
    this.ctx.strokeStyle = FOODSTROKECOLOR;
    this.ctx.fillRect(
      this.foodX,
      this.foodY,
      10,
      10
    )
  }

}