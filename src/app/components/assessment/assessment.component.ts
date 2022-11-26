import { Component, OnInit } from '@angular/core';
import officeData from '../../data/multiple-choice/office.json'
import travelData from '../../data/multiple-choice/travel.json'
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  public gameChoice
  public gameData
  public currentGameId: number
  public gameChoiceValue = [
    {id: 1, label: "FIll in the gap game 1 (travel)"},
    {id: 2, label: "FIll in the gap game 2 (office)"},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public setGameData(id) {
    this.currentGameId = id
    switch (id) {
      case 1:
        this.gameData = travelData
        break
      case 2:
        this.gameData = officeData
        break
    }
  }

}
