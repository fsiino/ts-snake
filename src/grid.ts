import { Settings } from './constants';

export class Grid {
  public canvas: HTMLCanvasElement
  public ctx: CanvasRenderingContext2D;
  private canvasWidth: number;
  private canvasHeight: number;
  public tileWidth: number;
  public tileHeight: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.tileWidth = this.canvasWidth / Settings.grid.TILESROW;
    this.tileHeight = this.canvasHeight / Settings.grid.TILESCOL;
    this.drawGrid();
  }

  drawGrid() {
    this.ctx.fillStyle = Settings.grid.TILECOLOR;
    this.ctx.strokeStyle = Settings.game.CANVASBGCOLOR;
    let tilesAcross = Settings.grid.TILESROW;
    let tilesDown = Settings.grid.TILESCOL

    for (let i = (1 / tilesAcross); i < tilesAcross; i++) {
      for (let j = (1 / tilesDown); j < tilesDown; j++) {
        this.ctx.fillRect(
          i * this.tileWidth,
          j * this.tileHeight,
          this.tileWidth - 1,
          this.tileHeight - 1
        )
      }
    }

  }
}