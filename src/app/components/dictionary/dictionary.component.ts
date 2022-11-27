import { Component, OnInit } from '@angular/core';
import travelData from '../../data/dictionary/travel.json'
import floraFauna from '../../data/dictionary/FloraFauna.json'
import office from '../../data/dictionary/office.json'
import { DictionaryData } from 'app/models/dictionary-data.model';
import { TopicChoice } from 'app/models/topic-choice.model';
import weatherClimateGeo from '../../data/dictionary/weather-climate-geography.json'

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  constructor() { }
  public chosenTopic: TopicChoice
  public chosenWord: DictionaryData
  public dictionaryData: DictionaryData[] = []
  public topicChoiceValues: TopicChoice[] = [
    { id: 1, label: "Travel", key: 'travel' },
    { id: 2, label: "Flora/Fauna", key: 'flora_fauna' },
    { id: 3, label: "Office/work", key: 'office_work' },
    { id: 4, label: "Weather/Climate/Geography", key: 'weather_climate_geography' },
  ]

  ngOnInit(): void {
  }

  public setDictionaryData(id) {
    switch (id) {
      case 1:
        this.dictionaryData = travelData.sort((a, b) => a['word'].localeCompare(b['word']))
        break
      case 2:
        this.dictionaryData = floraFauna.sort((a, b) => a['word'].localeCompare(b['word']))
        break
      case 3:
        this.dictionaryData = office.sort((a, b) => a['word'].localeCompare(b['word']))
        break
      case 4:
        this.dictionaryData = weatherClimateGeo.sort((a, b) => a['word'].localeCompare(b['word']))
        break

    }
  }

  public chooseWord(word: DictionaryData) {
    this.chosenWord = word
  }

}
