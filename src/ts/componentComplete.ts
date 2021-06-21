import { Assignment } from "./assignment";
import { Answer } from "./interfaces";

let levelCompleteAudio = new Audio("./sounds/level-complete.mp3");

export class ComponentComplete {
  private callbackKeyDown: EventListener;
  private callAudioDone : EventListener;
  private gameText : HTMLElement;
  assignment: Assignment;
  correctAnswer: Answer;

  constructor(assignment: Assignment) {
    this.assignment = assignment;
    this.correctAnswer = assignment.correctAnswer;

    this.callbackKeyDown = (e: Event) => this.handleKeyDown(e as KeyboardEvent);
    window.addEventListener("keydown", this.callbackKeyDown);

    this.callAudioDone = () => this.handleAudioEventListener();
    levelCompleteAudio.addEventListener("ended", this.callAudioDone);

    this.create();
  }

  create(): void {
    let game = document.querySelector("game") as HTMLElement;
    game.style.backgroundImage = `url("${this.assignment.theme.background}")`;
    // Add all game components
    let gameComponent = document.createElement("gameComponent");
    this.gameText = document.createElement("gameText");
    this.gameText.innerHTML = this.correctAnswer.component.word.replace(
      this.correctAnswer.letter.toLowerCase(),
      " _ "
    );

    console.log(this.correctAnswer.letter);
    game?.appendChild(gameComponent);
    game?.appendChild(this.gameText);

    gameComponent.id = this.correctAnswer.component.name;
    gameComponent.dataset.word = this.correctAnswer.component.word;

    gameComponent.style.transform = `translate(-50%, -50%)`;
    gameComponent.style.top = `50%`;
    gameComponent.style.left = `50% `;

    gameComponent.style.backgroundImage = `url("${this.correctAnswer.component.image}")`;
  }
  handleKeyDown(e: KeyboardEvent): void {
    if (e.key.toUpperCase() === this.correctAnswer.letter) {
      window.removeEventListener("keydown", this.callbackKeyDown);
      // Replcae the missing letter with the right one
      this.gameText.innerHTML = this.correctAnswer.component.word;
      // Play complete levelCompleteAudio
      levelCompleteAudio.play();
    }
  }
  remove(): void {
    document.querySelector("gameComponent")?.remove();
    document.querySelector("gameText")?.remove();
  }

  private handleAudioEventListener() {
    this.remove();
    this.assignment.next();
  }
}
