export interface Element {
  name: string;
  word: string;
  image: string | undefined;
  sound: string;
}

export class gameElement {
  constructor(el: Element) {
    console.log("New game element");
  }
}
