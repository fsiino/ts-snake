type snakePart = {
  x: number,
  y: number
}

const SNAKECOLOR = 'lightgreen';
const SNAKESTROKECOLOR = 'darkgreen';

export class Snake {
  
  public ctx: CanvasRenderingContext2D;

  public snake: Array<snakePart>;
  public score: number = 0;

  public dx: number;
  public dy: number;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
    this.snake = [  
      {x: 150, y: 60},  // head
      {x: 140, y: 60},  
      {x: 130, y: 60},  
      {x: 120, y: 60},  
      {x: 110, y: 60},
    ]
    this.dx = 0;
    this.dy = 10;
      
    // document.addEventListener("keydown", this.turn.bind(this))
    document.addEventListener('keydown', e => {
      this.turn(e)
    })

  }

  public drawSnake() {
    this.snake.forEach(snakePart => this.drawSnakePart(snakePart));
  }

  public drawSnakePart(snakePart: snakePart) {
    this.ctx.fillStyle = SNAKECOLOR;  
    this.ctx.strokeStyle = SNAKESTROKECOLOR; 
    this.ctx.fillRect(
      snakePart.x, 
      snakePart.y, 
      10, 
      10
    ); 
    this.ctx.strokeRect(
      snakePart.x, 
      snakePart.y, 
      10,
      10
    );
  }

  public moveSnake() {
    const head = { 
      x: this.snake[0].x + this.dx, 
      y: this.snake[0].y + this.dy,
    };
    this.snake.unshift(head);
    this.snake.pop();
  }

  public turn(e: any) {
    const LEFT = 65;
    const RIGHT = 68;
    const UP = 87;
    const DOWN = 83;

    //TODO: Fix 180 degree turn positioning e.g. (up -> left, down -> should shift down and not overlap with previous path)
    switch(e.keyCode) {
      case LEFT:
        if (this.dx !== 10) { // Disables 180 degree turn e.g. (right -> left)
          this.dx = -10;
          this.dy = 0;
          // console.log('l')
          break;
      }
      case RIGHT:
        if (this.dx !== -10) {
          this.dx = 10;
          this.dy = 0;
          // console.log('r')
          break;
      }
      case UP:
        if (this.dy !== 10) {
          this.dx = 0;
          this.dy = -10;
          // console.log('u')
          break;
      }
      case DOWN:
        if (this.dy !== -10) {
          this.dx = 0;
          this.dy = 10;
          // console.log('d')
          break;
      }
      default:
        return;
    };

  }

}