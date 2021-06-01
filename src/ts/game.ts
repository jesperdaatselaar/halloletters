import { subjectSelect } from "./subjectSelect.js";

let root: HTMLElement = document.querySelector("gameContainer")!;
export class game {
  constructor() {
    console.log("Game started");
    this.drawBackground();
    new subjectSelect();
  }

  drawBackground() {
    root.style.backgroundImage = `url("./assets/background.png")`;
  }
}
