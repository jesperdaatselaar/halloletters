let game = document.querySelector("gamecontainer");
export interface Element {
  name: string;
  word: string;
  image: string | undefined;
  sound: string;
}

export class gameElement {
  div: HTMLElement;
  constructor(el: Element) {
    console.log("New game element");
    let element = document.createElement("gameElement");
    element.id = el.name;
    game?.appendChild(element);
    let image = document.createElement("img");
    image.src = el.image || "./assets/logo.png";
    element.appendChild(image);
  }
}
