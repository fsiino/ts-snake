import { Game } from "./src/game";
document.addEventListener("DOMContentLoaded", () => {
  const canvas: HTMLCanvasElement = document.querySelector("canvas");
  const game = new Game(canvas);
  game.showStartScreen();
});