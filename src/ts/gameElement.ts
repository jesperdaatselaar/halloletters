export interface Element {
  name: String;
  word: String;
  image: String;
  sound: String;
}

export class gameElement {
  constructor(el: Element) {
    console.log("New game element");
  }
}
