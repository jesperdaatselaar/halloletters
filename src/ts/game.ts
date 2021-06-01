import { subjectSelect } from "./subjectSelect.js";

export class game {
  constructor() {
    console.log("Game started");

    this.drawBackground();
    new subjectSelect();
  }

  drawBackground() {
    document.body.style.backgroundImage = "url(./assets/level1_bg.jpg";
  }
}
