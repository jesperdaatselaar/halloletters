import { ComponentClick } from "./componentClick.js";
import { ComponentComplete } from "./componentComplete.js";
import { Answer, Component, Theme } from "./interfaces.js";
import { Level } from "./level.js";

export class Assignment {
  public theme: Theme;
  private phase: number;
  private level: Level;
  private _correctAnswer: Answer;
  public get correctAnswer(): Answer {
    return this._correctAnswer;
  }
  public set correctAnswer(value: Answer) {
    this._correctAnswer = value;
  }

  constructor(theme: Theme) {
    this.phase = 0;
    this.theme = theme;
    this.selectRandomAnswer(theme.components);
  }

  private selectRandomAnswer(components: Component[]) {
    // Get random component
    let component = components[Math.floor(Math.random() * components.length)];
    // Get random letter from word
    let letter = component.word
      .charAt(Math.floor(Math.random() * component.word.length))
      .toUpperCase();

    this.correctAnswer = { component: component, letter: letter };
  }
  public next(): void {
    if (this.phase >= 3) {
      this.phase = 0;
    }
    this.phase++;
    switch (this.phase) {
      case 1:
        new ComponentClick(this);
        break;
      case 2:
        new ComponentComplete(this);
        break;
      case 3:
        new Level();
        break;
      default:
        break;
    }
  }
}
