import { detectCollision } from "./collisionDetection";

export default class Snake {
  constructor(game) {
    this.rowSize = game.rowSize;
    this.colSize = game.colSize;
    this.size = game.blockSize;
    this.speed = 1 * this.size;
    this.speedX = this.speed;
    this.speedY = 0;
    this.trail = [];
    this.tail = 5;
    this.position = { x: 3 * this.size, y: 3 * this.size };
    this.game = game;
    this.buffer = [];
    this.state = true;
    this.counter = 0;
    this.validMove = false;
    this.speedRate = 0;
  }

  enqueue(element) {
    this.buffer.push(element);
  }

  dequeue() {
    return this.buffer.shift();
  }

  move(moveDirection) {
    return console.log(moveDirection, "()");
  }

  moveLeft() {
    this.speedX = -this.speed;
    this.speedY = 0;
  }
  moveRight() {
    this.speedX = this.speed;
    this.speedY = 0;
  }
  moveUp() {
    this.speedY = -this.speed;
    this.speedX = 0;
  }
  moveDown() {
    this.speedY = this.speed;
    this.speedX = 0;
  }

  toggleState() {
    if (this.state === true) {
      this.state = false;
    } else {
      this.state = true;
    }
  }

  update(deltaTime) {
    if (this.state === false) {
      if (this.counter <= this.speedRate) {
        this.counter++;
        return;
      }
      this.toggleState();
      return;
    }

    // creating valid move system

    if (this.speedX > 0 && this.buffer[0] === "this.moveLeft()") {
      this.validMove = false;
    } else if (this.speedX < 0 && this.buffer[0] === "this.moveRight()") {
      this.validMove = false;
    } else if (this.speedY > 0 && this.buffer[0] === "this.moveUp()") {
      this.validMove = false;
    } else if (this.speedY < 0 && this.buffer[0] === "this.moveDown()") {
      this.validMove = false;
    } else {
      this.validMove = true;
    }

    if (this.validMove) {
      eval(this.buffer[0]);
      this.dequeue();
    } else {
      this.dequeue();
    }

    this.position.x += this.speedX;
    this.position.y += this.speedY;

    if (this.position.x < 0)
      this.position.x = this.rowSize * this.size - 1 * this.size;
    if (this.position.x > this.rowSize * this.size - 1 * this.size)
      this.position.x = 0;
    if (this.position.y < 0)
      this.position.y = this.colSize * this.size - 1 * this.size;
    if (this.position.y > this.colSize * this.size - 1 * this.size)
      this.position.y = 0;

    if (detectCollision(this, this.game.apple)) {
      this.tail++;
    }

    for (let i = 0; i < this.trail.length; i++) {
      if (
        this.trail[i].x === this.position.x &&
        this.trail[i].y === this.position.y
      ) {
        this.game.lives--;
      }
    }

    this.trail.push({ x: this.position.x, y: this.position.y });
    while (this.trail.length > this.tail) {
      this.trail.shift();
    }
    this.counter = 0;
    this.toggleState();
  }

  draw(ctx) {
    //Snake's body
    ctx.fillStyle = "#00ff00";
    for (let i = 0; i < this.trail.length; i++) {
      ctx.fillRect(
        this.trail[i].x,
        this.trail[i].y,
        this.size - 1,
        this.size - 1
      );
    }

    //Snake's eyes
    ctx.fillStyle = "#000000";
    ctx.fillRect(
      this.position.x + 10,
      this.position.y + 10,
      this.size / 8,
      this.size / 8
    );
    ctx.fillStyle = "#000000";
    ctx.fillRect(
      this.position.x + 30,
      this.position.y + 10,
      this.size / 8,
      this.size / 8
    );
  }
}
