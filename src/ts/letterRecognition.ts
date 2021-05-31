export class letterRecognition {

  constructor() {
      console.log("LetterRegonition created");
      this.create();
  }

  create() {
      this.drawSubject();
      this.drawWord();
  }

  drawSubject() {
      let subjectContainer = document.createElement("subjectContainer");
      let subjectImg = document.createElement("img");
      subjectContainer.appendChild(subjectImg);
      document.body.appendChild(subjectContainer);

      subjectImg.src = "./assets/moon_level1.png";
  }

  drawWord() {
      let labelContainer = document.createElement("labelContainer");
      let wordLabel = document.createElement("label");
      labelContainer.appendChild(wordLabel);
      document.body.appendChild(labelContainer);

      wordLabel.innerText = "...aan";
  }
}
