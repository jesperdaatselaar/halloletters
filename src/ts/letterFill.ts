let game = document.querySelector("gamecontainer");

export class LetterFill {

    element : HTMLElement;

    constructor(data : HTMLElement) {
        this.element = data;
        this.element.classList.add("element-center");
        game?.appendChild(this.element);
    }



    
}