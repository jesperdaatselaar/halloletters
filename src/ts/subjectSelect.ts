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
    this.generateTheme();
  }

  generateTheme() {
    // TODO: Get random theme
  }

  generateHTML() {
    // TODO: Generate every theme element
  }
}
