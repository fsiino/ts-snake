const tune = {
  speed: 6,
  dX: 15,
  dY: 15,
}

type SnakeLoc = [number, number];

export class Snake {
  private ctx : CanvasRenderingContext2D;
  private x: number;
  private y: number;

  private snakePieceWidth: number;
  private snakePieceHeight: number;

  private dir: string;
  
  public head: number[]; // an array of numbers
  public body: SnakeLoc[]; // 2d array of coordinates, e.g. [ [1,2], [1,3] ]

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    this.snakePieceWidth = canvasWidth / 20;
    this.snakePieceHeight = canvasHeight / 20;

    // document.addEventListener("keydown", e => {
    //   switch(e.key) {
    //     case "Down" || "ArrowDown":
    //       this.dir = "Down";
    //       console.log('down')
    //       break;
    //     case "Up" || "ArrowUp":
    //       this.dir = "Up";
    //       break;
    //     case "Left" || "ArrowLeft":
    //       this.dir = "Left";
    //       break;
    //     case "Right" || "ArrowRight":
    //       this.dir = "Right";
    //       break;
    //     default: 
    //       return;
    //   }
    // })
  }

  draw() {
    // for (let i = 0; i < this.body.length; i++) {
      
    // }
    document.addEventListener("keydown", e => {
      switch (e.key) {
        case "ArrowDown":
          this.dir = "Down";
          console.log('down')
          break;
        case "ArrowUp":
          this.dir = "Up";
          console.log('up')
          break;
        case "ArrowLeft":
          this.dir = "Left";
          console.log('left')
          break;
        case "ArrowRight":
          this.dir = "Right";
          console.log('right')
          break;
        default:
          break;
      }
    })
    this.ctx.fillStyle = 'rgb(89, 0, 255)'
    this.ctx.strokeStyle = '#000'
    this.ctx.fillRect(
      50,
      50,
      this.snakePieceWidth,
      this.snakePieceHeight
    )
  }

  update() {
    
  }

}