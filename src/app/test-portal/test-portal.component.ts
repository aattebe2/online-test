import { Component, OnInit } from '@angular/core';
import { TestPortal, TestPortalService } from '../test-portal.service';

@Component({
  selector: 'app-test-portal',
  templateUrl: './test-portal.component.html'
})
export class TestPortalComponent implements OnInit {

  public testPortalObject: TestPortal[];
  public userAnswer: string[] = [];
  public correctAnswerForUser: string[] = [];
  public userAnswerIndex: number[] = [];
  public correctAnswerIndex: number[] = [];
  public index: number = 0;
  public numOfCorrectAns: number = 0;
  public endMessage: string;

  constructor(private testPortalSer: TestPortalService) { }

  ngOnInit(): void {
    this.testPortalSer.loadData().subscribe(result => { this.testPortalObject = result });
  }

  increaseArrayIndex(): void {
    this.index++;
  }

  decreaseArrayIndex(): void {
    this.index--;
  }

  setArrayIndex(index: number): void {
    this.index = index;
  }

  getMessage(): string {
    var returnString: string;
    var percentCorrect: number;

    if (this.numOfCorrectAns > 7) {
      returnString = `Congratulations! You answered ${this.numOfCorrectAns}/${this.testPortalObject.length} questions correctly!`;
    } else if (this.numOfCorrectAns > 5) {
      returnString = `You answered ${this.numOfCorrectAns}/${this.testPortalObject.length} questions correctly.`;
    } else if (this.numOfCorrectAns > 0) {
      returnString = `Sorry. You only answered ${this.numOfCorrectAns}/${this.testPortalObject.length} questions correctly.`
    } else {
      returnString = "Abysmal... You didn't answer a single question correctly.";
    }

    percentCorrect = 100 * (this.numOfCorrectAns/this.testPortalObject.length);
    returnString += ` Your score is ${percentCorrect}%.`;

    return returnString;
  }

  showResults(): void {
    for (var n=0; n<this.userAnswerIndex.length; n++) {
      if (this.userAnswerIndex[n] === this.correctAnswerIndex[n]) {
        this.numOfCorrectAns++;
        console.log(`${n} - Correct`);
      }
    }

    this.endMessage = this.getMessage();

    document.getElementById('idTest').style.display = 'none';
    document.getElementById('idResults').style.display = 'inline';
  }

  submitAnswer(choice: number) {
    this.userAnswer[this.index] = this.testPortalObject[this.index].answers[choice];
    this.correctAnswerForUser[this.index] = this.testPortalObject[this.index].answers[this.testPortalObject[this.index].correctAnswer];
    this.userAnswerIndex[this.index] = choice;
    this.correctAnswerIndex[this.index] =this.testPortalObject[this.index].correctAnswer;
    /*console.log(this.userAnswer[this.index]);
    console.log(this.correctAnswerForUser[this.index]);
    console.log(this.userAnswerIndex[this.index]);
    console.log(this.correctAnswerIndex[this.index]);*/
    if (this.index < (this.testPortalObject.length - 1)) {
      this.increaseArrayIndex()
    } else {
      this.showResults();
    }
  }

  startOver(): void {
    this.index = 0;
    document.getElementById('idTest').style.display = 'inline';
    document.getElementById('idResults').style.display = 'none';
    this.endMessage = "";
    this.numOfCorrectAns = 0;
    this.userAnswer = [];
    this.correctAnswerForUser = [];
    this.userAnswerIndex = [];
    this.correctAnswerIndex = [];
  }

}
