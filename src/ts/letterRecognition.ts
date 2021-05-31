export class letterRecognition {

    subjectImage : string;
    word : string;

  constructor() {
      console.log("LetterRegonition created");
      
      this.subjectImage = "moon_level1.png";
      this.word = "..oon";

      this.create();
  }

  create() {
      this.drawSubject();
      this.drawWord();
  }

  drawSubject() {
      // Create container for subject image
      let subjectContainer = document.createElement("subjectContainer");
      let subjectImg = document.createElement("img");
      subjectContainer.appendChild(subjectImg);
      // Draw container on screen
      document.body.appendChild(subjectContainer);

      subjectImg.src = `./assets/${this.subjectImage}`;
  }

  drawWord() {
      // Create container for label
      let labelContainer = document.createElement("labelContainer");
      let wordLabel = document.createElement("label");
      labelContainer.appendChild(wordLabel);
      // Draw container on screen
      document.body.appendChild(labelContainer);

      wordLabel.innerText = this.word;
  }
}
