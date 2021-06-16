import { Assignment } from "./assignment";

export class ComponentComplete {
  private callbackKeyDown: EventListener;
  assignment: Assignment;

  constructor(assignment: Assignment) {
    this.assignment = assignment;
    this.create();
  }

  create(): void {}
  handleKeyDown(e: Event): void {}
  remove(): void {}
}
