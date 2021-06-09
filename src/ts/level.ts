import { Theme } from "./interfaces";

export class Level {
  private level: number;
  private _theme: Theme;
  public get theme(): Theme {
    return this._theme;
  }

  constructor() {}

  private selectRandomTheme() {}
  public next(level: number) {}
}
