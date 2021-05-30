export class game {
  constructor() {
    console.log("Game started");

    this.drawBackground();
  }

  drawBackground() {
    document.body.style.backgroundImage = "url(./assets/level1_bg.jpg";
  }
}
