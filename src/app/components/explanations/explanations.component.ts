import { Component, OnInit } from '@angular/core';
import explanations from '../../data/explanations/explanations.json'
@Component({
  selector: 'app-explanations',
  templateUrl: './explanations.component.html',
  styleUrls: ['./explanations.component.css']
})
export class ExplanationsComponent implements OnInit {

  public data = explanations.sort((a, b) => a['topic'].localeCompare(b['topic']))
  public chosenExplanation
  constructor() { }


  public chooseExplanation(explanation) {
    this.chosenExplanation = explanation
  }
  ngOnInit(): void {
  }

}
