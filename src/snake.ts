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
      {x: 150, y: 110},  // head
      {x: 140, y: 110},  
      {x: 130, y: 110},  
      {x: 120, y: 110},  
      {x: 110, y: 110},
    ]
    this.dx = 0;
    this.dy = 0;
  }

  public drawSnakePart(snakePart: any) {
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

  public drawSnake() { 
    this.snake.forEach(snakePart => this.drawSnakePart(snakePart)); 
  }

  public advanceSnake() {
    const head = { 
      x: this.snake[0].x + this.dx, 
      y: this.snake[0].y + this.dy,
    };
    this.snake.unshift(head);
    this.snake.pop();
  }

  public turn(event: any) {
    const LEFT = 65;
    const RIGHT = 
  }
}