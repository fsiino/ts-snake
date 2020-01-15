export class Grid {

  public ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
  }

  public draw() {
    this.ctx.fillStyle = 'white';
    for (let i = 0; i < this.ctx.canvas.width; i++) {
      for (let j = 0; j < this.ctx.canvas.height; j++) {
        this.ctx.fillRect(
          i * 6,
          j * 6,
          5,5
        )
      }
    }
  }
}