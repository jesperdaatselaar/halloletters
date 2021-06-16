import { Assignment } from "./assignment";
import { Component } from "./interfaces";

let game = document.querySelector("game") as HTMLElement;

export class ComponentClick {
  private callbackClick: EventListener;
  assignment: Assignment;

  constructor(assignment: Assignment) {
    console.log(assignment);
    this.assignment = assignment as Assignment;
    this.create();
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

      gameComponent.style.backgroundImage = `url("${component.image || "./assets/logo.png"
        }")`;
    }
    // Sound for right awnser
    const clickRightImageSound = new Audio(this.assignment.correctAnswer.component.sound);
    // Play sound
    clickRightImageSound.play();
  }
  handleKeyClick(e: Event): void { }
  remove(): void {
    let arrayOfEmpty: HTMLElement[] = [];
    for (let child of game.children) {
      arrayOfEmpty.push(child as HTMLElement);
    }
    for (let i = 0; i < arrayOfEmpty.length; i++) {
      arrayOfEmpty[i].remove();
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