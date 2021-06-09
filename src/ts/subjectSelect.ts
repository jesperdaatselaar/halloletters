import themes from "./themes.js";
import { gameElement, Element } from "./gameElement.js";
import { LetterFill } from "./letterFill.js";

interface Theme {
  name: string;
  elements: Element[];
  background: string;
}

export class subjectSelect {
  currentTheme: Theme;
  themes: Theme[];

  constructor() {
    console.log("Start subjectSelector");
    this.themes = themes;
    this.randomTheme();
    this.generateHTML();

    window.addEventListener("click", (e) => {
      let arrayOfEmpty: HTMLElement[] = [];
      let gameContainer = document.querySelector("gamecontainer")!;
      let el = e.target as HTMLElement;
      if (el.tagName == "GAMEELEMENT") {
        console.log(gameContainer.children);
        for (let i = 0; i < gameContainer.children.length; i++) {
          arrayOfEmpty.push(gameContainer.children[i] as HTMLElement);
        }
        for (let i = 0; i < arrayOfEmpty.length; i++) {
          if (arrayOfEmpty[i].id != el.id) {
            arrayOfEmpty[i].remove();
          }
        }
        window.removeEventListener("click", () => {});
      }
      window.removeEventListener("click", () => {});
      new LetterFill(el.dataset.word!);
    });
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
