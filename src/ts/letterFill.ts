let game = document.querySelector("gamecontainer");

export class LetterFill {

    word : string;

    constructor(data : []) {
        let gameElement = document.querySelector("gameElement");
        gameElement?.classList.add("element-center");

        this.word = "maan";
    }

    removeLetter() {
        // Get random letter from word
        let randomLetter = this.word.charAt(Math.floor(Math.random() * this.word.length));
        // Replace the letter with a space
        let newWord = this.word.replace(randomLetter, ' ');
        // Display word with missing letter on screen
        this.displayWord(newWord);
    }
}