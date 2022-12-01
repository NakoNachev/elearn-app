import { Component, Input, OnInit } from '@angular/core';
import officeData from '../../data/multiple-choice/office.json'
import travelData from '../../data/multiple-choice/travel.json'
import travelData2 from '../../data/multiple-choice/travel2.json'
import florfaunData from '../../data/match-sentence/flora_fauna.json'
import floraFaunaMCData from '../../data/mc-quiz/flora-fauna.json'
import floraFaunaMCData2 from '../../data/multiple-choice/flora_fauna.json'
import geoDataMc from '../../data/multiple-choice/geography_weather.json'
import geoDataMs from '../../data/match-sentence/geography_weather_match_sentence.json'
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  @Input() isLearnAssessment: boolean
  public gameChoice
  public gameData
  public currentGameId: number
  public gameChoiceValue = [
    { id: 1, label: "Multiple choice 1 (travel)", type: "multiple-choice", key: 'mc-travel' },
    { id: 2, label: "Multiple choice 2 (travel)", type: "choose-definition", key: 'def-travel' },
    { id: 3, label: "Multiple choice 3 (office)", type: "multiple-choice", key: 'mc-office' },
    { id: 4, label: "Multiple choice 4 (geography)", type: "multiple-choice", key: 'mc-geo' },
    { id: 5, label: "Multiple choice 5 (flora and fauna)", type: "multiple-choice", key: 'mc-florafauna' },
    { id: 6, label: "Multiple choice 6 (flora and fauna)", type: "multiple-choice", key: 'mc-florafauna2' },
    { id: 6, label: "Match sentence (Flora and Fauna)", type: "match-sentence", key: 'ms-florfaun' },
    { id: 7, label: "Match sentence (Geography)", type: "match-sentence", key: 'ms-geo' },

  ]
  constructor() { }

  ngOnInit(): void {
  }

  public setGameData(id) {
    this.currentGameId = id
    switch (id) {
      case 1:
        this.gameData = this.isLearnAssessment ? travelData.slice(0, 2) : travelData
        break
      case 2:
        this.gameData = this.isLearnAssessment ? travelData2.slice(0, 2) : travelData2
        break
      case 3:
        this.gameData = this.isLearnAssessment ? officeData.slice(0, 2) : officeData
        break
      case 4:
        this.gameData = this.isLearnAssessment ? geoDataMc.slice(0, 2) : geoDataMc
        break
      case 5:
        this.gameData = this.isLearnAssessment ? floraFaunaMCData.slice(0, 2) : floraFaunaMCData
        break
      case 6:
        this.gameData = this.isLearnAssessment ? floraFaunaMCData2.slice(0, 2) : floraFaunaMCData2
        break
      case 7:
        this.gameData = florfaunData
        break
      case 8:
        this.gameData = geoDataMs
        break
    }
  }

}
