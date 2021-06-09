import themes from "./themes.js";
import { gameElement, Element } from "./gameElement.js";

interface Theme {
  name: string;
  elements: Element[];
  background : string;
}

export class subjectSelect {
  currentTheme: Theme;
  themes: Theme[];

  constructor() {
    console.log("Start subjectSelector");
    this.themes = themes;
    this.randomTheme();
    this.generateHTML();
  }

  randomTheme() {
    this.currentTheme = themes[Math.floor(Math.random() * themes.length)];
  }

  generateHTML() {
    // Draw background
    this.drawBackground();
    // Generate every theme element
    for (let i = 0; i < this.currentTheme.elements.length; i++) {
      new gameElement(this.currentTheme.elements[i]);
    }
  }

  drawBackground() {
    let root: HTMLElement = document.querySelector("gameContainer")!;
    root.style.backgroundImage = `url("${this.currentTheme.background}")`;
  }
}
