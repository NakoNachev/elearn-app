import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MultipleChoiceData } from 'app/models/multiple-choice.model';
export interface AnswersTracker {
  gameId: number
  currentAnswers: string[]
}
@Component({
  selector: 'app-choose-word',
  templateUrl: './choose-word.component.html',
  styleUrls: ['./choose-word.component.css']
})


export class ChooseWordComponent implements OnInit, OnChanges {

  @Input() data: MultipleChoiceData[]
  @Input() gameId: number

  private currentAnswers: string[]
  public showAnswers: boolean = false
  constructor() { }

  ngOnInit(): void {
    if (this.data && this.gameId) this.loadDefaultAnswers()
    this.showAnswers = false
  }

  ngOnChanges(): void {
    if (this.data && this.gameId) this.loadDefaultAnswers()
    this.showAnswers = false
  }

  public loadDefaultAnswers() {
    if (!this.data) return
    this.currentAnswers = null
    const defaultAnswers = this.data.map(it => it.values[0])
    this.currentAnswers = defaultAnswers
  }

  public changeAnswer(value: string, index: number) {
    if (!value) return
    this.currentAnswers[index] = value
  }

  public showHideAnswers() {
    this.showAnswers ? this.showAnswers = false : this.showAnswers = true
  }

  public submit() {
    const correctAnswers = this.data.map(it => it.solution)
    let correctTotal: number = 0
    for (let index = 0; index < this.currentAnswers.length; index++) {
      if (this.currentAnswers[index] == correctAnswers[index]) {
        correctTotal++
      }
    }
    alert(`You have answered ${correctTotal} / ${correctAnswers.length} correct`)
  }


}
