export class Snake {

  public ctx: CanvasRenderingContext2D;

  public head: Array<number>; // array of number(s)
  public body: Array<[number, number]>; // array of arrays e.g. [ [x,y], [x,y], .. ]

  public startPos: Array<[number, number]>

  public score: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
    this.startPos = [
      [50,3],
      [51,3],
      [52,3]
    ]
    this.body = [
      this.startPos[0],
      this.startPos[1],
      this.startPos[2],
    ]
    this.head = this.body[0];
  }

  spawn() {
    for (let i = 0; i < this.body.length; i++) {
      let headIdx = 0;
      if (i === headIdx) {
        this.ctx.fillStyle = 'black';
      } else {
        this.ctx.fillStyle = 'pink';
      }
      this.ctx.fillRect(
        this.startPos[i][0] * 5,
        this.startPos[i][1] * 15,
        20, 
        5
      );
    }
  }

  animate() {
    
  }

  slither() {
    
  }
}