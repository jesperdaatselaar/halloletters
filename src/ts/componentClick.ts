import { Assignment } from "./assignment";
import { Component } from "./interfaces";

let game = document.querySelector("game") as HTMLElement;
const clickedWrongImageSound = new Audio("./sounds/wrong.mp3");

export class ComponentClick {
  private callbackClick: EventListener;
  assignment: Assignment;

  constructor(assignment: Assignment) {
    console.log(assignment);
    this.assignment = assignment as Assignment;
    this.create();
    this.callbackClick = (e: Event) => this.handleKeyClick(e);
    window.addEventListener("click", this.callbackClick);
    
  }
  create(): void {
    // Add background to game
    game.style.backgroundImage = `url("${this.assignment.theme.background}")`;
    // Add all game components
    for (let component of this.assignment.theme.components) {
      let gameComponent = document.createElement("gameComponent");
      game?.appendChild(gameComponent);

      gameComponent.id = component.name;
      gameComponent.dataset.word = component.word;

      this.setPosition(gameComponent);

      for (let child of game.children) {
        this.checkPosition(child, gameComponent);
      }

      gameComponent.style.backgroundImage = `url("${
        component.image || "./assets/logo.png"
      }")`;
    }
    // Sound for right awnser
    const clickRightImageSound = new Audio(
      this.assignment.correctAnswer.component.sound
    );
    // Play sound
    clickRightImageSound.play();
  }
  handleKeyClick(e: Event): void {
    let element = e.target as Element;
    if (element.id === this.assignment.correctAnswer.component.name) {
      // Sound for clicking rihgt awnser
      const clickedRightImageSound = new Audio("./sounds/good_job.mp3");
      // Play sound
      clickedRightImageSound.play();
      // Remove all elements
      this.removeElements();
      // Remove eventListener
      window.removeEventListener("click", this.callbackClick);
    } else {
      // Sound for clicking wrong awnser
      if(clickedWrongImageSound.paused) {
        // Play sound
        clickedWrongImageSound.play();
      }
    }
  }
  removeElements(): void {
    for (let i = game.children.length - 1; i >= 0; i--) {
      game.children[i].remove();
    }
    // Start next phase
    this.assignment.next();
  }
  collisionDetect(a: ClientRect, b: ClientRect): Boolean {
    return (
      a.left <= b.right &&
      b.left <= a.right &&
      a.top <= b.bottom &&
      b.top <= a.bottom
    );
  }
  checkPosition(child: Element, gameComponent: HTMLElement) {
    let overlay;
    if (child != gameComponent) {
      overlay = this.collisionDetect(
        child.getBoundingClientRect(),
        gameComponent.getBoundingClientRect()
      );
    }

    while (overlay) {
      console.log("in while");

      this.setPosition(gameComponent);
      if (child != gameComponent) {
        overlay = this.collisionDetect(
          child.getBoundingClientRect(),
          gameComponent.getBoundingClientRect()
        );
      }
    }
  }

  private setPosition(gameComponent: HTMLElement) {
    console.log("Change position");

    let x = Math.floor(
      Math.random() * (window.innerWidth - gameComponent.clientWidth)
    );
    let y = Math.floor(
      Math.random() * (window.innerHeight - gameComponent.clientHeight)
    );

    gameComponent.style.transform = `translate(${x}px, ${y}px)`;
  }
}
