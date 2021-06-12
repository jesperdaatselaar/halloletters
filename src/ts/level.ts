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
  }

  private selectRandomTheme() {
    this._theme = themes[Math.floor(Math.random() * themes.length)];
    console.log(this._theme)
  }
  public next(level: number) {}
}
