import { Assignment } from "./assignment.js";
import { ComponentClick } from "./componentClick.js";
import { Theme } from "./interfaces.js";
import themes from "./themes.js";

export class Level {
  private level: number;
  private _theme: Theme;
  private assignment: Assignment;
  public get theme(): Theme {
    return this._theme;
  }

  constructor() {
    this.selectRandomTheme();
    this.assignment = new Assignment(this._theme);
    this.assignment.next();
  }

  private selectRandomTheme() {
    this._theme = themes[Math.floor(Math.random() * themes.length)];
  }
  public next(level: number) {}
}
