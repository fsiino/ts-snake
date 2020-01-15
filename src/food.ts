export class Food {

  public ctx: CanvasRenderingContext2D;

  public foodQueue: Array<[number, number]>
  public firstServing: [number, number]

  public canvasWidth: number;
  public canvasHeight: number;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');

    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;

    
    this.foodQueue = [];
    this.getFoodLoc();
  }

  public getFoodLoc() {
    let randomCoordX = Math.floor(Math.random() * (this.canvasWidth - 10) + 1)
    let randomCoordY = Math.floor(Math.random() * (this.canvasHeight - 10) + 1)
    this.foodQueue.push([randomCoordX, randomCoordY]);
  }

  public spawn() {
    for(let i = 0; i < this.foodQueue.length; i++) {
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(
        this.foodQueue[i][0],
        this.foodQueue[i][1],
        8,
        5
      )
    }
  }
}