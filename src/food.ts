export class Food {
  public ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');


  }

  //TODO: Make tunable with constant
  public randomFoods(min: number,max: number):number { 
    let random = Math.round(Math.random() * (max-min) * 10);
    return random;
  }

  public createFood() {

  }

  public drawFood() {

  }
}