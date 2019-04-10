export function detectCollision(apple, snake) {
  let applePositionX = apple.position.x;
  let applePositionY = apple.position.y;
  let snakePositionX = snake.position.x;
  let snakePositionY = snake.position.y;

  if (applePositionX === snakePositionX && applePositionY === snakePositionY) {
    return true;
  } else {
    return false;
  }
}
