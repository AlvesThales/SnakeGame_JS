import { detectCollision } from "./collisionDetection";

export default class Apple {
  constructor(game) {
    this.image = document.getElementById("img_apple");
    this.rowSize = game.rowSize;
    this.colSize = game.colSize;
    this.position = {
      x: this.size * Math.floor(Math.random() * this.rowSize),
      y: this.size * Math.floor(Math.random() * this.colSize)
    };
    this.game = game;
    this.size = game.blockSize;
  }

  reset() {
    this.position = {
      x: this.size * Math.floor(Math.random() * this.rowSize),
      y: this.size * Math.floor(Math.random() * this.colSize)
    };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
  update(deltaTime) {
    if (detectCollision(this, this.game.snake)) {
      this.reset();
    }
  }
}
