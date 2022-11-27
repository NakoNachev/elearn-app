import { Component, OnInit } from '@angular/core';
import officeData from '../../data/multiple-choice/office.json'
import travelData from '../../data/multiple-choice/travel.json'
import travelData2 from '../../data/multiple-choice/travel2.json'
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
    { id: 1, label: "Multiple choice 1 (travel)", type: "multiple-choice", key: 'mc-travel' },
    { id: 2, label: "Multiple choice 2 (travel)", type: "choose-definition", key: 'def-travel' },
    { id: 3, label: "Multiple choice 3 (office)", type: "multiple-choice", key: 'mc-office' },

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
        this.gameData = travelData2
        break
      case 3:
        this.gameData = officeData
        break
    }
  }

}
