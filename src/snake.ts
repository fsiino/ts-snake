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

  private cellWidth: number;
  private cellHeight: number;

  private dir: string;
  
  public head: number[]; // an array of numbers / single coordinate
  public body: SnakeLoc[]; // 2d array of coordinates, e.g. [ [1,2], [1,3] ]

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    this.cellWidth = canvasWidth / 20;
    this.cellHeight = canvasHeight / 20;

    
    this.body = [
      [1,1],
      [2,1],
      [3,1]
      // start with length of 2 body (one being head)
    ]

    this.head = this.body[0]; // replace one cell of body with head.
  }

  controlSnake() {
    document.addEventListener("keydown", e => {
      switch (e.key) {
        case "ArrowDown" && "s":
          this.dir = "S";
          console.log('down')
          break;
        case "ArrowUp" && "w":
          this.dir = "N";
          console.log('up')
          break;
        case "ArrowLeft" && "a":
          this.dir = "W";
          console.log('left')
          break;
        case "ArrowRight" && "d":
          this.dir = "E";
          console.log('right')
          break;
        default:
          break;
      }
    })
  }

  draw() {
    this.controlSnake();
    
    for (let i = 0; i < this.body.length; i++) {
      // this.body is a 2d array of coords.
      this.ctx.fillStyle = 'rgb(89, 0, 255)'
      this.ctx.strokeStyle = '#000'
      this.ctx.fillRect(
        this.body[i][0],
        this.body[i][1],
        this.cellWidth,
        this.cellHeight
      )
    }
  }

  update() {
    switch (this.dir) {
      case "S":
        this.body.pop();
        console.log('heading south')
      default: 
        break;
    }
  }

}