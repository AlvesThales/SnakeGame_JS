import Game from "./game";

export default class InputHandler {
  constructor(snake, game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          snake.enqueue("this.moveLeft()");
          break;

        case 39:
          snake.enqueue("this.moveRight()");
          break;

        case 38:
          snake.enqueue("this.moveUp()");
          break;

        case 40:
          snake.enqueue("this.moveDown()");
          break;

        case 32:
          game.togglePause();
          break;

        case 13:
          game.start();
          break;
      }
    });
  }
}
