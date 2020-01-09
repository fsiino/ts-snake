const tune = {
  speed: 6,
  dX: 15,
  dY: 15,
}

export class Snake {
  private ctx : CanvasRenderingContext2D;
  private x: number;
  private y: number;

  private snakePieceWidth: number;
  private snakePieceHeight: number;

  private dir: string;
  
  public head: number[];
  public body: [number, number]

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    this.snakePieceWidth = canvasWidth / 20;
    this.snakePieceHeight = canvasHeight / 20;

    document.addEventListener("keydown", e => {
      switch(e.key) {
        case "Down" || "ArrowDown":
          this.dir = "Down";
        case "Up" || "ArrowUp":
          this.dir = "Up";
        case "Left" || "ArrowLeft":
          this.dir = "Left";
        case "Right" || "ArrowRight":
          this.dir = "Right";
      }
    })
    
    
  }

  draw() {
    // for (let i = 0; i < this.body.length; i++) {
      
    // }
    this.ctx.fillStyle = 'rgb(91, 20, 124)'
    this.ctx.fillRect(
      250,
      50,
      10,
      10
    )
  }

}