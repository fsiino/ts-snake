import { Settings} from './constants';
import { Food } from './food';

type snakePart = {
  x: number,
  y: number
}

export class Snake {
  
  public ctx: CanvasRenderingContext2D;
  public body: Array<snakePart>;
  public head: Array<snakePart>;
  public food: Food;
  public dx: number;
  public dy: number;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
    this.body = [  
      {x: 150, y: 60},  // head
      {x: 140, y: 60},  
      {x: 130, y: 60},  
    ]

    this.food = new Food(canvas);
    this.dx = 0;
    this.dy = 10;
      
    document.addEventListener('keydown', e => this.turn(e))
  }

  public drawSnake(): void {
    this.body.slice(1).forEach(snakePart => this.drawSnakePart(snakePart));
    this.drawSnakeHead(this.body[0]);
  }

  private drawSnakeHead(snakeHead: snakePart): void {
    this.ctx.fillStyle = Settings.snake.SNAKEHEADCOLOR;
    this.ctx.strokeStyle = Settings.snake.SNAKEHEADSTROKECOLOR;
    this.ctx.fillRect(
      snakeHead.x, snakeHead.y, 10, 10
    );
    this.ctx.strokeRect(
      snakeHead.x, snakeHead.y, 10, 10
    );
    this.ctx.beginPath();
    this.ctx.arc(snakeHead.x + 3, snakeHead.y + 3, 1, 0, 4 * Math.PI)
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(snakeHead.x + 7, snakeHead.y + 3, 1, 0, 4 * Math.PI)
    this.ctx.stroke();
  }

  private drawSnakePart(snakePart: snakePart): void {
    this.ctx.fillStyle = Settings.snake.SNAKECOLOR;  
    this.ctx.strokeStyle = Settings.snake.SNAKESTROKECOLOR; 
    this.ctx.fillRect(
      snakePart.x, snakePart.y, 10, 10
    ); 
    this.ctx.strokeRect(
      snakePart.x, snakePart.y, 10, 10
    );
  }

  public moveSnake(foodLoc: Array<number>): void  { 
    const head = { 
      x: this.body[0].x + this.dx, 
      y: this.body[0].y + this.dy,
    };

    this.body.unshift(head);

    const ateFood = (this.body[0].x === foodLoc[0] && this.body[0].y === foodLoc[1]);
    if (!ateFood) this.body.pop();
  }
  
  public turn(e: any): String {
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
          return 'L'
          // break;
      }
      case RIGHT:
        if (this.dx !== -10) {
          this.dx = 10;
          this.dy = 0;
          return 'R'
          // break;
      }
      case UP:
        if (this.dy !== 10) {
          this.dx = 0;
          this.dy = -10;
          return 'U'
          // break;
      }
      case DOWN:
        if (this.dy !== -10) {
          this.dx = 0;
          this.dy = 10;
          return 'D'
          // break;
      }
      default:
        return;
    };
  }
}