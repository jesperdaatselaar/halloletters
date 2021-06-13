import { Assignment } from "./assignment.js";
import { ComponentClick } from "./componentClick.js";
import { Theme } from "./interfaces.js";
import themes from "./themes.js";

export class Level {
  private level: number;
  private _theme: Theme;
  public get theme(): Theme {
    return this._theme;
  }

  constructor() {
    this.selectRandomTheme();

    new ComponentClick(new Assignment(this._theme)); 
  }

  private selectRandomTheme() {
    this._theme = themes[Math.floor(Math.random() * themes.length)];
  }
  public next(level: number) {}
}
