import { subjectSelect } from "./subjectSelect.js";

let root: HTMLElement = document.querySelector("gameContainer")!;
export class game {
  constructor() {
    console.log("Game started");
    new subjectSelect();
  }
}
