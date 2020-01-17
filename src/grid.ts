export class Grid {
  public canvas: HTMLCanvasElement
  public ctx: CanvasRenderingContext2D;
  public canvasWidth: number;
  public canvasHeight: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.drawGrid();
  }

  drawGrid() {
    this.ctx.fillStyle = 'green';
    this.ctx.strokeStyle = 'black';
    this.ctx.fillRect(
      0, 0, this.canvasWidth, this.canvasHeight
    )
  }

}