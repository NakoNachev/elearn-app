import { Component, OnInit } from '@angular/core';
import officeData from '../../data/multiple-choice/office.json'
import travelData from '../../data/multiple-choice/travel.json'
import travelData2 from '../../data/multiple-choice/travel2.json'
import florfaunData from '../../data/match-sentence/flora_fauna.json'
@Component({
  selector: 'app-explanations',
  templateUrl: './explanations.component.html',
  styleUrls: ['./explanations.component.css']
})
export class ExplanationsComponent implements OnInit {

  public gameChoice
  public gameData
  public currentGameId: number
  public gameChoiceValue = [
    { id: 1, label: "Multiple choice 1 (travel)", type: "multiple-choice", key: 'mc-travel' },
    { id: 2, label: "Multiple choice 2 (travel)", type: "choose-definition", key: 'def-travel' },
    { id: 3, label: "Multiple choice 3 (office)", type: "multiple-choice", key: 'mc-office' },
    { id: 4, label: "Match sentence (Flora and Fauna)", type: "match-sentence", key: 'ms-florfaun' },

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
      case 4:
        this.gameData = florfaunData
        break
    }
  }

}
