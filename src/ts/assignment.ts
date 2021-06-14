import { Answer, Component, Theme } from "./interfaces.js";
import { Level } from "./level.js";

export class Assignment {
  public theme: Theme;
  private phase: number;
  private level: Level;
  private _correctAnswer: Answer;
  private set correctAnswer(value : any){
      this._correctAnswer = value;
  }
  public get correctAnswer(): Answer {
    return this._correctAnswer;
  }

  constructor(theme : Theme) {
    this.theme = theme;
    this.selectRandomAnswer(theme.components); 
  }

  private selectRandomAnswer(components : Component[]) {
    // Get random component
    let component = components[Math.floor(Math.random() * components.length)];
    // Get random letter from word
    let letter = component.word.charAt(Math.floor(Math.random() * component.word.length)).toUpperCase();

    this.correctAnswer = component;
    this.correctAnswer = letter;
  }
  public next(p: number): void {}
}
