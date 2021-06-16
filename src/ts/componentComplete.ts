import { Assignment } from "./assignment";
import { Answer } from "./interfaces";

export class ComponentComplete {
  private callbackKeyDown: EventListener;
  assignment: Assignment;
  correctAnswer: Answer;

  constructor(assignment: Assignment) {
    this.assignment = assignment;
    this.correctAnswer = assignment.correctAnswer;
    this.create();
  }

  create(): void {
    let game = document.querySelector("game") as HTMLElement;
    game.style.backgroundImage = `url("${this.assignment.theme.background}")`;
    // Add all game components
    let gameComponent = document.createElement("gameComponent");
    game?.appendChild(gameComponent);

    gameComponent.id = this.correctAnswer.component.name;
    gameComponent.dataset.word = this.correctAnswer.component.word;

    gameComponent.style.transform = `translate(50vw, 50vh)`;

    gameComponent.style.backgroundImage = `url("${this.correctAnswer.component.image}")`;
  }
  handleKeyDown(e: Event): void {}
  remove(): void {}
}
