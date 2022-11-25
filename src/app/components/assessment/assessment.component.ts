import { Component, OnInit } from '@angular/core';
import data from '../../data/work-choose-right-word.json'
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  sentences = data.data
  public gameChoice
  public gameChoiceValue = [
    {id: 1, label: "FIll in the gap game 1"},
    {id: 2, label: "FIll in the gap game 2"},
    {id: 3, label: "FIll in the gap game 3"},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

  test() {
    console.log(this.gameChoice)
  }

}
