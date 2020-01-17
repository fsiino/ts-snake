import { Food } from './food';

type snakePart = {
  x: number,
  y: number
}

const SNAKECOLOR = 'lightgreen';
const SNAKESTROKECOLOR = 'darkgreen';

export class Snake {
  
  public ctx: CanvasRenderingContext2D;
  public body: Array<snakePart>;
  public food: Food;
  public score: number = 0;
  public dx: number;
  public dy: number;
  public canvasWidth: number;
  public canvasHeight: number;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
    this.body = [  
      {x: 150, y: 60},  // head
      {x: 140, y: 60},  
      {x: 130, y: 60},  
      {x: 120, y: 60},  
      {x: 110, y: 60},
    ]
    this.food = new Food(canvas);
    this.dx = 0;
    this.dy = 10;
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
      
    document.addEventListener('keydown', e => this.turn(e))

    // this.body.forEach(part => {
    //   if (part.x !== this.food.foodLoc[0] && part.y !== this.food.foodLoc[1]) {
    //     this.food.createFood();
    //   }
    // })

    // caused repeated creation of 4-6 foods before setTimeout
    // now causes 2 to spawn at game start.
  }

  public drawSnake(): void {
    this.body.forEach(snakePart => this.drawSnakePart(snakePart));
  }

  public drawSnakePart(snakePart: snakePart): void {
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

  public moveSnake(foodLoc: Array<number>): void  { // being called by Game
    const head = { 
      x: this.body[0].x + this.dx, 
      y: this.body[0].y + this.dy,
    };

    this.body.unshift(head);
    const ateFood = (this.body[0].x === foodLoc[0] && this.body[0].y === foodLoc[1]);

    if (!ateFood) {
      this.body.pop();
    }
  }
  
  public turn(e: any): void {
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