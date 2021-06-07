let game = document.querySelector("gamecontainer");

// import {LetterFill } from "./LetterFill.js";
export interface Element {
  name: string;
  word: string;
  image: string | undefined;
  sound: string;
}

export class gameElement {
  private _x: number;
  public get x(): number {
    return this._x;
  }
  public set x(value: number) {
    this._x = value;
  }

  private _y: number;
  public get y(): number {
    return this._y;
  }
  public set y(value: number) {
    this._y = value;
  }
  div: HTMLElement;
  data: Element;

  constructor(el: Element) {
    console.log("New game element");
    this.data = el;
    this.create();
    this.div.addEventListener("click", (e) => {
      for (let i = 0; i < game!.children.length; i++) {
        game?.children[i].remove();
      }
      // new letterFill(this.data);
    });
  }

  create() {
    this.div = document.createElement("gameelement");
    game?.appendChild(this.div);

    this.div.id = this.data.name;
    this.div.style.backgroundImage = `url("${
      this.data.image || "./assets/logo.png"
    }")`;

    this._x = Math.floor(
      Math.random() * (window.innerWidth - this.div.clientWidth)
    );
    this._y = Math.floor(
      Math.random() * (window.innerHeight - this.div.clientHeight)
    );
    this.div.style.transform = `translate(${this._x}px, ${this._y}px)`;
  }
}
