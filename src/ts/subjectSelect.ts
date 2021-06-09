import themes from "./themes.js";
import { gameElement, Element } from "./gameElement.js";

interface Theme {
  name: string;
  elements: Element[];
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
      }
    });
  }

  randomTheme() {
    this.currentTheme = themes[Math.floor(Math.random() * themes.length)];
  }

  generateHTML() {
    // TODO: Generate every theme element
    for (let i = 0; i < this.currentTheme.elements.length; i++) {
      new gameElement(this.currentTheme.elements[i]);
    }
  }
}
