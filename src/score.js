import { detectCollision } from "./collisionDetection";

export default class Score {
  constructor(game) {
    this.apple = game.apple;
    this.snake = game.snake;
    this.blockSize = game.blockSize;
    this.score = 0;
  }

  draw(ctx) {
    ctx.font = "30px Courier New";
    ctx.fillStyle = "white";
    ctx.fillText("Score: ", 2 * this.blockSize, 1 * this.blockSize);
    ctx.fillText(this.score, 3.5 * this.blockSize, 1 * this.blockSize);
  }

  update(deltaTime) {
    if (detectCollision(this.apple, this.snake)) {
      this.score += 1;
    }
  }
}
