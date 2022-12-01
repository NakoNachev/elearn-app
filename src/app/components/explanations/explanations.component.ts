import { Component, OnInit } from '@angular/core';
import { TopicChoice } from 'app/models/topic-choice.model';
import explanations from '../../data/explanations/flora_fauna.json'
@Component({
  selector: 'app-explanations',
  templateUrl: './explanations.component.html',
  styleUrls: ['./explanations.component.css']
})
export class ExplanationsComponent implements OnInit {

  public data = explanations
  public chosenExplanation
  public topicChoiceValues: TopicChoice[] = [
    { id: 1, label: "Flora/Fauna", key: 'travel_words' },
    { id: 2, label: "Flora/Fauna", key: 'flora_fauna_words' },
    { id: 3, label: "Office/work", key: 'office_work_words' },
    { id: 4, label: "Weather/Climate/Geography", key: 'weather_climate_geography_words' },
  ]
  constructor() { }


  public chooseExplanation(explanation) {
    this.chosenExplanation = explanation
  }
  ngOnInit(): void {
  }

}
