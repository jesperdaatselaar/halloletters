import { Assignment } from "./assignment";
import { Answer } from "./interfaces";

export class ComponentComplete {
  private callbackKeyDown: EventListener;
  assignment: Assignment;
  correctAnswer: Answer;

  constructor(assignment: Assignment) {
    this.assignment = assignment;
    this.correctAnswer = assignment.correctAnswer;
    this.callbackKeyDown = (e: Event) => this.handleKeyDown(e as KeyboardEvent);
    window.addEventListener("keydown", this.callbackKeyDown);
    this.create();
  }

  create(): void {
    let game = document.querySelector("game") as HTMLElement;
    game.style.backgroundImage = `url("${this.assignment.theme.background}")`;
    // Add all game components
    let gameComponent = document.createElement("gameComponent");
    let gameText = document.createElement("gameText");
    gameText.innerHTML = this.correctAnswer.component.word.replace(
      this.correctAnswer.letter.toLowerCase(),
      " _ "
    );

    console.log(this.correctAnswer.letter);
    game?.appendChild(gameComponent);
    game?.appendChild(gameText);

    gameComponent.id = this.correctAnswer.component.name;
    gameComponent.dataset.word = this.correctAnswer.component.word;

    gameComponent.style.transform = `translate(-50%, -50%)`;
    gameComponent.style.top = `50%`;
    gameComponent.style.left = `50% `;

    gameComponent.style.backgroundImage = `url("${this.correctAnswer.component.image}")`;
  }
  handleKeyDown(e: KeyboardEvent): void {
    if (e.key.toUpperCase() === this.correctAnswer.letter) {
      console.log("GG WP");
      window.removeEventListener("keydown", this.callbackKeyDown);
      this.remove();
    }
  }
  remove(): void {
    document.querySelector("gameComponent")?.remove();
    document.querySelector("gameText")?.remove();
    this.assignment.next();
  }
}
