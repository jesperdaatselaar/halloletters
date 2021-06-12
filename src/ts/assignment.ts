import { Answer, Theme } from "./interfaces.js";
import { Level } from "./level.js";

export class Assignment {
  private theme: Theme;
  private phase: number;
  private level: Level;
  private _correctAnswer: Answer;
  public get correctAnswer(): Answer {
    return this._correctAnswer;
  }

  constructor() {}

  private selectRandomAnswer() {}
  public next(p: number): void {}
}
