export class Quiz{
    constructor(gategory,difficulty ,numberOfQuestions) {
        this.gategory = gategory;
        this.difficulty = difficulty;
        this.numberOfQuestions = numberOfQuestions;
        this.score = 0;
    }
  
async gatAllQuestions() {

    let response = await fetch(
      `https://opentdb.com/api.php?amount=${this.numberOfQuestions}&category=${this.gategory}&difficulty=${this.difficulty}`
    );
  
  
    let finalResponse = await response.json();
  
    console.log(finalResponse.results);
    
  
      return finalResponse.results
    
  
  }
}
