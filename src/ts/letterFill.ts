let game = document.querySelector("gamecontainer");

export class LetterFill {

    word : string;
    missingLetter : string;
    wordElement : HTMLElement;

    constructor(data : []) {
        let gameElement = document.querySelector("gameElement");
        gameElement?.classList.add("element-center");

        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));

        this.word = "maan";

        this.removeLetter();
    }

    removeLetter() {
        // Get random letter from word
        let randomLetter = this.word.charAt(Math.floor(Math.random() * this.word.length));
        this.missingLetter = randomLetter.toUpperCase();
        // Replace the letter with a space
        let newWord = this.word.replace(randomLetter, ' ');
        // Display word with missing letter on screen
        this.displayWord(newWord);
    }

    displayWord(newWord : string) {
        this.wordElement = document.createElement("wordElement");
        this.wordElement.innerText = newWord;
        game?.appendChild(this.wordElement);
    }

    private onKeyDown(e: KeyboardEvent): void {
        if (e.key.toUpperCase() === this.missingLetter) {
            let checkmark = document.createElement("i");
            game?.appendChild(checkmark);

            checkmark.classList.add("fas fa-check");
            // Display the full word
            this.wordElement.innerText = this.word;
        }
    }
}