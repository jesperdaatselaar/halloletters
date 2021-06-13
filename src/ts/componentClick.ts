import { Assignment } from "./assignment";
import { Component } from "./interfaces";

let game = document.querySelector("game") as HTMLElement;

export class ComponentClick {
  private callbackClick: EventListener;
  assignment: Assignment;

  constructor(assignment: Assignment) {
    console.log(assignment)
    this.assignment = assignment;

    for(let c of assignment.theme.components) {
      this.create(c);
    }

    game!.style.backgroundImage = `url("${assignment.theme.background}")`;
  }

  create(component: Component): void {
    let gameComponent = document.createElement("gameComponent");
    game?.appendChild(gameComponent);

    gameComponent.id = component.name;
    gameComponent.dataset.word = component.word;
    gameComponent.style.backgroundImage = `url("${
      component.image || "./assets/logo.png"
    }")`;

    let x = Math.floor(
      Math.random() * (window.innerWidth - gameComponent.clientWidth)
    );
    let y = Math.floor(
      Math.random() * (window.innerHeight - gameComponent.clientHeight)
    );
    gameComponent.style.transform = `translate(${x}px, ${y}px)`;
  }
  handleKeyClick(e: Event): void {}
  remove(): void {}
}
